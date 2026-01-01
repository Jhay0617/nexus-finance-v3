import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
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

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signUp, isPending } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) return;

    signUp({ email, password, username });
  }

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader>
          <h1>Create Identity</h1>
          <p>Join the Nexus financial network</p>
        </AuthHeader>

        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="username">Display Name</label>
            <input
              type="text"
              id="username"
              placeholder="e.g. John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isPending}
              required
            />
          </FormGroup>

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
            <label htmlFor="password">Password (min 6 characters)</label>
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
            {isPending ? "Establishing Identity..." : "Create Account"}
          </AuthButton>
        </StyledForm>

        <StyledLink to="/login">Already have a vault? Sign in here</StyledLink>
      </AuthCard>
    </AuthContainer>
  );
}

export default SignupPage;
