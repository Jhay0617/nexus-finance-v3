import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "./useAuth";

import { toast } from "sonner";

export const useSignUp = () => {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,

    onSuccess: () => {
      toast.success("Account successfully created");
    },

    onError: (error) => toast.info(error.message),
  });

  return { signUp, isPending };
};
