import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 260px 1fr;
  background-color: var(--bg-obsidian);
  color: var(--text-primary);
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  background: radial-gradient(
    circle at top right,
    rgba(16, 185, 129, 0.03),
    transparent 40%
  );

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-glass);
    border-radius: 10px;
  }
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 80%;

  @media (max-width: 768px) {
    padding: 1.25rem;
    padding-bottom: 6rem;
  }
`;
