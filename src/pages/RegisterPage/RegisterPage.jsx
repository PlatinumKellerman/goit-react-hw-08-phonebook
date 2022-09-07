import { StyledContainer } from './RegisterPage.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export function RegisterPage() {
  return (
    <StyledContainer sx={{ width: 500, display: 'flex' }}>
      <RegisterForm />
    </StyledContainer>
  );
}
