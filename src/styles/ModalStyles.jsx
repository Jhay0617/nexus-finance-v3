import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: 2rem 1rem;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  background: var(--card-glass);
  border: 1px solid var(--border-glass);
  width: 100%;
  max-width: 500px;
  border-radius: 32px;
  padding: 2.5rem;
  animation: ${slideUp} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 24px;
  }
`;
export const AmountInputWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  input {
    background: transparent;
    border: none;
    font-size: 3.5rem;
    font-weight: 800;
    font-family: "JetBrains Mono", monospace;
    width: 100%;
    text-align: center;
    color: ${(props) =>
      props.$isExpense ? "var(--expense)" : "var(--income)"};
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.1);
    }
  }

  span {
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
  }
`;
export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s ease;

    &.selected {
      opacity: 1;
      transform: scale(1.1);
    }

    .icon-circle {
      width: 50px;
      height: 50px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
    }

    &.selected .icon-circle {
      border-color: ${(props) => props.$color || "var(--income)"};
      background: ${(props) =>
        props.$color ? `${props.$color}20` : "rgba(16, 185, 129, 0.1)"};
    }

    span {
      font-size: 0.7rem;
      color: var(--text-secondary);
    }
  }
`;
