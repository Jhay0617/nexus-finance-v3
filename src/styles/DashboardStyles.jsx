import styled from "styled-components";

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .title-group h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }
`;

export const ActionButton = styled.button`
  background: var(--income);
  color: var(--bg-obsidian);
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  background: var(--card-glass);
  border: 1px solid var(--border-glass);
  backdrop-filter: blur(12px);
  padding: 1.75rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    filter: blur(40px);
    opacity: 0.15;
    background: ${(props) =>
      props.$type === "income"
        ? "var(--income)"
        : props.$type === "expense"
        ? "var(--expense)"
        : "var(--text-primary)"};
  }

  .label-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .value {
    font-size: 1.85rem;
    font-weight: 700;
    font-family: "JetBrains Mono", monospace;
    letter-spacing: -1px;
    color: ${(props) =>
      props.$type === "income"
        ? "var(--income)"
        : props.$type === "expense"
        ? "var(--expense)"
        : "var(--text-primary)"};
  }
`;
export const LedgerContainer = styled.div`
  background: var(--card-glass);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  overflow: hidden;
`;

export const TransactionRow = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  &:last-child {
    border: none;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.$catColor ? `${props.$catColor}20` : "rgba(255,255,255,0.05)"};
    color: ${(props) => props.$catColor || "white"};
  }

  .main-info {
    display: flex;
    flex-direction: column;
    .desc {
      font-weight: 500;
      font-size: 0.95rem;
    }
    .cat-name {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }
  }

  .amount-info {
    text-align: right;
    font-family: "JetBrains Mono", monospace;
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) =>
      props.$isExpense ? "var(--expense)" : "var(--income)"};
  }

  @media (max-width: 480px) {
    padding: 1rem;
    grid-template-columns: 40px 1fr auto;
    .icon-wrapper {
      width: 40px;
      height: 40px;
    }
  }
`;
