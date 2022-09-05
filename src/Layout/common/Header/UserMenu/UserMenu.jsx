import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentication/operations';
import { getUserEmail } from 'redux/authentication/selectors';
import { UserMenuWrapper, UserMail } from './UserMenu.styled';
import Button from '@mui/material/Button';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <UserMail href="mailto:info@devstudio.com">Hello, {email}</UserMail>
      <Button
        sx={{
          width: '120px',
          backgroundColor: '#d55448',
          '&:hover': {
            backgroundColor: '#c29545',
          },
        }}
        type="button"
        variant="contained"
        size="medium"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </UserMenuWrapper>
  );
}
