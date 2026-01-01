import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./supabase";
import { toast } from "sonner";

async function fetchTransactionsData({ queryKey }) {
  const [_key, { date_range, id }] = queryKey;

  let query = supabase.from("transactions").select(`
      *,
      category:categories(*),
      account:accounts(*)
    `);

  if (id) query = query.eq("id", id);

  if (date_range) query = query.gte("created_at", date_range);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) throw new Error(error.message || "Failed to fetch transactions");
  return data;
}

export const useTransactionsData = (filters = {}) => {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions", filters],
    queryFn: fetchTransactionsData,
  });

  return { transactions, isLoading, error };
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  const { mutate: createTransaction, isPending } = useMutation({
    mutationFn: async (newAsset) => {
      const { data, error } = await supabase
        .from("transactions")
        .insert([
          {
            amount: newAsset.amount,
            description: newAsset.description,
            category_id: newAsset.category_id,
            account_id: newAsset.account_id,
            user_id: newAsset.user_id,
            is_expense: newAsset.is_expense,
          },
        ])
        .select()
        .single();

      if (error)
        throw new Error(error.message || "failed to make a transaction");

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
      queryClient.invalidateQueries(["accounts"]);
      toast.success("Transaction has been made");
    },

    onError: (error) => toast.info(error.message),
  });

  return { createTransaction, isPending };
};
