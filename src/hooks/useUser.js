import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabase";

export const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;
      if (!session) return null;

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (profileError) throw profileError;
      return { ...session.user, ...profile };
    },
    staleTime: 1000 * 60 * 5,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
  };
};

export async function updateProfile({ username, avatarUrl }) {
  const { data, error } = await supabase.auth.updateUser({
    data: { display_name: username, avatar_url: avatarUrl },
  });

  if (error) throw error;

  const { error: profileError } = await supabase
    .from("profiles")
    .update({ display_name: username, avatar_url: avatarUrl })
    .eq("id", data.user.id);

  if (profileError) throw profileError;
  return data;
}
export async function changePassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error) throw error;
  return data;
}
export async function uploadAvatar(file) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const fileExt = file.name.split(".").pop();
  const fileName = `${user.id}-${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(filePath);

  return publicUrl;
}
