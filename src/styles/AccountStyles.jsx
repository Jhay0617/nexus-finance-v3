import styled from "styled-components";

export const AssetGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AssetCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--income);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(16, 185, 129, 0.3);
    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.7);
  }

  .asset-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--income);
  }

  .label {
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 2rem;
    font-weight: 800;
    font-family: "JetBrains Mono", monospace;
    letter-spacing: -1px;
    color: var(--text-primary);
  }

  .account-id {
    margin-top: 1.5rem;
    font-size: 0.7rem;
    color: var(--text-secondary);
    opacity: 0.4;
    font-family: monospace;
  }
`;

export const AccountsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0;
  }

  p {
    color: var(--text-secondary);
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    button {
      width: 100%;
    }
  }
`;
