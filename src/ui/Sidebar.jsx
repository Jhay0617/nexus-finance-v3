import {
  StyledSidebar,
  ProfileSection,
  NavItem,
} from "../styles/SidebarStyles";
import { useUser } from "../hooks/useUser";
import { useLogout } from "../hooks/useLogout";
import { LayoutDashboard, Wallet, Settings, LogOut } from "lucide-react";

function Sidebar() {
  const { user } = useUser();
  const { signOut, isPending } = useLogout();

  return (
    <StyledSidebar>
      <div>
        <h2 style={{ padding: "0 1rem 2rem 1rem", letterSpacing: "-1px" }}>
          NEXUS<span style={{ color: "var(--income)" }}>.</span>
        </h2>

        <ProfileSection>
          <img src={`${user.avatar_url}`} alt="" />
          <div className="details">
            <span className="name">{user?.display_name || "Nexus User"}</span>
            <span className="email">{user?.email}</span>
          </div>
        </ProfileSection>

        <nav>
          <NavItem to="/dashboard">
            <LayoutDashboard size={20} strokeWidth={1.5} />
            <span>Dashboard</span>
          </NavItem>

          <NavItem to="/accounts">
            <Wallet size={20} strokeWidth={1.5} />
            <span>Accounts</span>
          </NavItem>

          <NavItem to="/profile">
            <Settings size={20} strokeWidth={1.5} />
            <span>Settings</span>
          </NavItem>
        </nav>
      </div>

      <div style={{ marginTop: "auto" }}>
        <NavItem
          as="button"
          onClick={signOut}
          disabled={isPending}
          style={{
            width: "100%",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "var(--expense)",
            justifyContent: "flex-start",
          }}
        >
          <LogOut size={20} strokeWidth={1.5} />
          <span>{isPending ? "Exiting..." : "Sign Out"}</span>
        </NavItem>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
