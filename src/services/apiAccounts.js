import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./supabase";
import { toast } from "sonner";

async function fetchAccountsData() {
  const { data, error } = await supabase.from("accounts").select("*");

  if (error) throw new Error(error.message || "failed to fetch the data");

  return data;
}

export const useAccountsData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["accounts"],
    queryFn: fetchAccountsData,
  });

  return { data, isLoading, error };
};

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  const { mutate: createAccount, isPending } = useMutation({
    mutationFn: async (newAccount) => {
      const { data, error } = await supabase
        .from("accounts")
        .insert([newAccount])
        .select()
        .single();

      if (error) throw new Error(error.message || "Failed to create account");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["accounts"]);
      toast.success("New financial asset created!");
    },
    onError: (error) => toast.error(error.message),
  });

  return { createAccount, isPending };
};

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteAccount, isPending } = useMutation({
    mutationFn: async (id) => {
      const { data, error } = await supabase
        .from("accounts")
        .delete()
        .eq("id", id);

      if (error) throw new Error(error.message || "failed to delete account");

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["accounts"]);
      queryClient.invalidateQueries(["transactions"]);
      toast.success("Account info has been removed");
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteAccount, isPending };
};
