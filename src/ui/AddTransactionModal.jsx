import { useForm, Controller } from "react-hook-form";
import * as LucideIcons from "lucide-react";
import { useCategoriesData } from "../services/apiCategories";
import { useAccountsData } from "../services/apiAccounts";
import { useCreateTransaction } from "../services/apiTransactions";
import { useUser } from "../hooks/useUser";
import {
  ModalOverlay,
  ModalContent,
  AmountInputWrapper,
  CategoryGrid,
} from "../styles/ModalStyles";
import { StyledForm, FormGroup, AuthButton } from "../styles/AuthStyles";

function AddTransactionModal({ onClose }) {
  const { user } = useUser();
  const { data: categories } = useCategoriesData();
  const { data: accounts } = useAccountsData();
  const { createTransaction, isPending } = useCreateTransaction();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
      description: "",
      is_expense: true,
      category_id: "",
      account_id: "",
    },
  });

  const isExpense = watch("is_expense");

  const onSubmit = (data) => {
    if (!user) return;

    const transactionData = {
      ...data,
      amount: Number(data.amount),
      user_id: user.id,
    };

    createTransaction(transactionData, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setValue("is_expense", true);
                setValue("category_id", "");
              }}
              style={{
                color: isExpense ? "var(--expense)" : "gray",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => {
                setValue("is_expense", false);
                setValue("category_id", "");
              }}
              style={{
                color: !isExpense ? "var(--income)" : "gray",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Income
            </button>
          </div>

          <AmountInputWrapper $isExpense={isExpense}>
            <span>{isExpense ? "Spending" : "Earning"} Amount</span>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("amount", { required: true, min: 0.01 })}
              autoFocus
            />
          </AmountInputWrapper>

          <FormGroup>
            <label>Description</label>
            <input
              type="text"
              placeholder="Rent, Groceries, Salary..."
              {...register("description")}
            />
          </FormGroup>

          <FormGroup>
            <label>Source Account</label>
            <select {...register("account_id", { required: true })}>
              <option value="">Select an account</option>
              {accounts?.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name}
                </option>
              ))}
            </select>
          </FormGroup>

          <label
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              marginTop: "1rem",
              display: "block",
            }}
          >
            Category
          </label>
          <Controller
            name="category_id"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CategoryGrid>
                {categories
                  ?.filter((c) => c.type === (isExpense ? "expense" : "income"))
                  .map((cat) => {
                    const Icon = LucideIcons[cat.icon_name] || LucideIcons.Tag;
                    return (
                      <div
                        key={cat.id}
                        className={`category-item ${
                          field.value === cat.id ? "selected" : ""
                        }`}
                        onClick={() => field.onChange(cat.id)}
                      >
                        <div
                          className="icon-circle"
                          style={{ color: cat.color_code }}
                        >
                          <Icon size={20} />
                        </div>
                        <span>{cat.name}</span>
                      </div>
                    );
                  })}
              </CategoryGrid>
            )}
          />

          <AuthButton
            type="submit"
            disabled={isPending}
            style={{ marginTop: "2rem" }}
          >
            {isPending ? "Updating Ledger..." : "Add Transaction"}
          </AuthButton>
        </StyledForm>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AddTransactionModal;
