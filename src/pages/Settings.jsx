import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthCard, FormGroup, AuthButton } from "../styles/AuthStyles";
import {
  changePassword,
  updateProfile,
  uploadAvatar,
  useUser,
} from "../hooks/useUser";
import { useDeleteAccount, useAccountsData } from "../services/apiAccounts";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Landmark } from "lucide-react";
import { SettingsContainer } from "../styles/SettingsContainer";

function Settings() {
  const { user } = useUser();
  const { data: accounts } = useAccountsData();
  const { deleteAccount, isDeleting } = useDeleteAccount();
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm({
    defaultValues: { username: user?.display_name },
  });

  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [password, setPassword] = useState("");

  const onUpdateProfile = async (data) => {
    setIsUpdatingProfile(true);
    try {
      let avatarUrl = user?.avatar_url;
      const avatarFile = document.getElementById("avatarFile").files[0];
      if (avatarFile) avatarUrl = await uploadAvatar(avatarFile);

      await updateProfile({ username: data.username, avatarUrl });
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message || "Error updating profile.");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleDeleteAccount = (id) => {
    toast("Are you sure you want to delete this account?", {
      description: "This action cannot be undone.",
      duration: Infinity,
      action: {
        label: "Confirm",
        onClick: () => deleteAccount(id),
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.info("no changes has been made"),
      },
    });
  };

  return (
    <SettingsContainer>
      <h1>Vault Settings</h1>
      <AuthCard style={{ marginBottom: "2rem" }}>
        <h3>Profile Identity</h3>
        <form onSubmit={handleSubmit(onUpdateProfile)}>
          <FormGroup>
            <label>Display Name</label>
            <input {...register("username")} disabled={isUpdatingProfile} />
          </FormGroup>
          <FormGroup>
            <label>Profile Picture</label>
            <input
              type="file"
              id="avatarFile"
              accept="image/*"
              disabled={isUpdatingProfile}
            />
          </FormGroup>
          <AuthButton type="submit" disabled={isUpdatingProfile}>
            {isUpdatingProfile ? "Updating..." : "Update Profile"}
          </AuthButton>
        </form>
      </AuthCard>

      <AuthCard style={{ marginBottom: "2rem" }}>
        <h3>Manage Financial Assets</h3>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-secondary)",
            marginBottom: "1rem",
          }}
        >
          Active buckets in your Nexus network.
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {accounts?.map((acc) => (
            <div
              key={acc.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid var(--border-glass)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Landmark size={18} color="var(--income)" />
                <span style={{ fontWeight: 500 }}>{acc.name}</span>
              </div>
              <button
                onClick={() => handleDeleteAccount(acc.id, acc.name)}
                disabled={isDeleting}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--expense)",
                  cursor: "pointer",
                }}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </AuthCard>

      <AuthCard>
        <h3>Security</h3>
        <FormGroup>
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isChangingPassword}
          />
        </FormGroup>
        <AuthButton
          onClick={async () => {
            setIsChangingPassword(true);
            try {
              await changePassword(password);
              toast.success("Password updated!");
              setPassword("");
            } catch (err) {
              toast.error(err.message);
            } finally {
              setIsChangingPassword(false);
            }
          }}
          disabled={isChangingPassword}
        >
          {isChangingPassword ? "Updating..." : "Change Password"}
        </AuthButton>
      </AuthCard>
    </SettingsContainer>
  );
}

export default Settings;
