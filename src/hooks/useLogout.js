import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: signOutApi,

    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.success("Signed out");
    },

    onError: (error) => toast.info(error.message),
  });

  return { signOut, isPending };
};
