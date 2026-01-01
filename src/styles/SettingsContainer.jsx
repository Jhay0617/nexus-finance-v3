import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 8rem 1rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    letter-spacing: -1px;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 100px 1rem;
    width: 80%;
    margin: 0 auto;
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
