import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-obsidian: #09090b;
    --card-glass: rgba(255, 255, 255, 0.03);
    --border-glass: rgba(255, 255, 255, 0.08);
    --text-primary: #fafafa;
    --text-secondary: #a1a1aa;
    --income: #10b981;
    --expense: #ef4444;
  }

  body {
    background-color: var(--bg-obsidian);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

`;
