import { HeaderBar } from './Header.styled';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authentication/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <HeaderBar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</HeaderBar>;
};
