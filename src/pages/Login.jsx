import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {
  AuthContainer,
  AuthCard,
  AuthHeader,
  StyledForm,
  FormGroup,
  AuthButton,
} from "../styles/AuthStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--income);
  text-decoration: none;
  font-size: 0.85rem;
  text-align: center;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader>
          <h1>Nexus Identity</h1>
          <p>Secure financial vault access</p>
        </AuthHeader>

        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
              required
            />
          </FormGroup>

          <AuthButton type="submit" disabled={isPending}>
            {isPending ? "Authorizing Vault..." : "Sign In"}
          </AuthButton>
        </StyledForm>

        <StyledLink to="/signup">
          Don't have a ledger? Create a Nexus account
        </StyledLink>
      </AuthCard>
    </AuthContainer>
  );
}

export default Login;
