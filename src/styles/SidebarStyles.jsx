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
/* --- Obsidian Mobile Navigation (2026 Standard) --- */

export const MobileNav = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(13, 13, 13, 0.8); /* Deep Obsidian */
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 1rem;
  z-index: 1000;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const MobileNavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 60px;

  svg {
    font-size: 1.5rem;
    transition: transform 0.2s ease;
  }

  &.active {
    color: var(--income);

    svg {
      transform: translateY(-4px);
      filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4));
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const AppContainer = styled.div`
  padding-bottom: 0;
  @media (max-width: 1024px) {
    padding-bottom: 80px;
  }
`;
