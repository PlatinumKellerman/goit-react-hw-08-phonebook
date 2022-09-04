import { StyledLink, StyledButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <StyledButton>
        <StyledLink to="/register">Register</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink to="/login">Login</StyledLink>
      </StyledButton>
    </nav>
  );
};
