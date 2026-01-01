import styled from "styled-components";

export const AuthContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-obsidian);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--income);
    filter: blur(150px);
    opacity: 0.05;
    top: -100px;
    right: -100px;
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: var(--card-glass);
  border: 1px solid var(--border-glass);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border: none;
    background: transparent;
    backdrop-filter: none;
  }
`;

export const AuthHeader = styled.div`
  text-align: center;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-left: 0.25rem;
  }

  input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-glass);
    border-radius: 12px;
    padding: 0.875rem 1rem;
    color: white;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--income);
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const AuthButton = styled.button`
  background: var(--text-primary);
  color: var(--bg-obsidian);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
