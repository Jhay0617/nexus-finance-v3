import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

const pulse = keyframes`
  0% { opacity: 0.3; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.3; transform: scale(0.95); }
`;

const FullPageLoader = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-obsidian);
  gap: 1.5rem;

  .logo {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -2px;
    animation: ${pulse} 2s infinite ease-in-out;
    color: var(--text-primary);
  }
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <FullPageLoader>
        <div className="logo">
          NEXUS<span style={{ color: "var(--income)" }}>.</span>
        </div>
      </FullPageLoader>
    );
  }

  if (isAuthenticated) return children;
  return null;
}

export default ProtectedRoute;
