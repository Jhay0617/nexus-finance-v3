import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logIn as logInApi } from "./useAuth";
import { toast } from "sonner";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: logInApi,

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
      toast.success("Welcome back!");
    },

    onError: (error) => toast.info(error.message),
  });

  return { login, isPending };
};
