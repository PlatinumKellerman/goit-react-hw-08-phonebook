import { LoginForm } from '../../components/LoginForm/LoginForm';
import { StyledContainer } from './LogInPage.styled';

export function LogInPage() {
  return (
    <StyledContainer sx={{ width: 500, display: 'flex' }}>
      <LoginForm />
    </StyledContainer>
  );
}
