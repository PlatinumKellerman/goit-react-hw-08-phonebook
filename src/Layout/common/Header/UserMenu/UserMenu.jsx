import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentication/operations';
import { getUserEmail } from 'redux/authentication/selectors';
import { UserMenuWrapper, UserMail, UserMenuButton } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <UserMail>{email}</UserMail>
      <UserMenuButton type="button" onClick={handleLogOut}>
        LOGOUT
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
