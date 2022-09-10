import { StyledContainer } from './RegisterPage.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <StyledContainer sx={{ width: 500, display: 'flex' }}>
      <RegisterForm />
    </StyledContainer>
  );
}

export default RegisterPage;
