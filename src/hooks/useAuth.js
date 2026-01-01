import { supabase } from "../services/supabase";

export async function signUp({ email, password, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    username,
    options: {
      data: { display_name: username },
    },
  });

  if (error) throw new Error(error.message || "failed to sign up");
  const newProfile = {
    id: data.user.id,
    display_name: username,
    currency_code: "PHP",
  };
  if (data?.user) {
    const { error: profileError } = await supabase
      .from("profiles")
      .insert([newProfile]);

    if (profileError)
      throw new Error(profileError.message || "failed to create an account");
  }

  return data;
}

export async function logIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message || "failed to login");

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message || "failed to sign out");
}
