import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSidebar = styled.aside`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  position: sticky;
  top: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-primary);
  }

  &.active {
    background: rgba(255, 255, 255, 0.08);
    color: var(--income);
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  svg {
    font-size: 1.25rem;
  }
`;
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--income);
    background-color: var(--bg-obsidian);
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--income);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: var(--bg-obsidian);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
  }

  .details {
    overflow: hidden;
    span {
      display: block;
    }
    .name {
      font-weight: 600;
      font-size: 0.95rem;
    }
    .email {
      font-size: 0.75rem;
      color: var(--text-secondary);
      opacity: 0.7;
    }
  }
`;
