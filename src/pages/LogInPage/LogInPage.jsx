import { LoginForm } from '../../components/LoginForm/LoginForm';
import { StyledContainer } from './LogInPage.styled';

function LogInPage() {
  return (
    <StyledContainer sx={{ width: 500 }}>
      <LoginForm />
    </StyledContainer>
  );
}

export default LogInPage;
