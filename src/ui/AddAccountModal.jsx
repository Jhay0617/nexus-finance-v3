import { useForm } from "react-hook-form";
import { useCreateAccount } from "../services/apiAccounts";
import { useUser } from "../hooks/useUser";
import { ModalOverlay, ModalContent } from "../styles/ModalStyles";
import { StyledForm, FormGroup, AuthButton } from "../styles/AuthStyles";

function AddAccountModal({ onClose }) {
  const { user } = useUser();
  const { createAccount, isPending } = useCreateAccount();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createAccount(
      {
        ...data,
        balance: Number(data.balance) || 0,
        user_id: user.id,
      },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: "1.5rem" }}>Create New Asset</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>Account Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="e.g. G-Cash, BPI, Savings"
            />
          </FormGroup>

          <FormGroup>
            <label>Initial Balance</label>
            <input
              type="number"
              step="0.01"
              {...register("balance")}
              placeholder="0.00"
            />
          </FormGroup>

          <AuthButton type="submit" disabled={isPending}>
            {isPending ? "Creating Asset..." : "Confirm Asset"}
          </AuthButton>
        </StyledForm>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AddAccountModal;
