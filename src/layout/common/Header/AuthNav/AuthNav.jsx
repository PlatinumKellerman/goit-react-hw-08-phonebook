import { StyledLink, AuthNavTitle, AuthNavWrapper } from './AuthNav.styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Stack spacing={5} direction="row">
        <Button
          sx={{
            padding: '0px',
            width: '120px',
            backgroundColor: '#d55448',
            '&:hover': {
              backgroundColor: '#c29545',
            },
          }}
          type="button"
          variant="contained"
          size="medium"
        >
          <StyledLink to="/register">Register</StyledLink>
        </Button>
        <Button
          sx={{
            padding: '0px',
            width: '120px',
            backgroundColor: '#d55448',
            '&:hover': {
              backgroundColor: '#c29545',
            },
          }}
          type="button"
          variant="contained"
          size="medium"
        >
          <StyledLink to="/login">Login</StyledLink>
        </Button>
      </Stack>
      <AuthNavTitle>Phonebook</AuthNavTitle>
    </AuthNavWrapper>
  );
};
