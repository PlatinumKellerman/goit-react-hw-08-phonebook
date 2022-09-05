import styled from 'styled-components';
import { GoBackLink } from '../../components/GoBackLink/GoBackLink';

export const NotFoundPage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: red;
`;

export function PageNotFound() {
  return (
    <>
      <GoBackLink to={'/'}>{'<'} Go to Homepage</GoBackLink>
      <NotFoundPage> Sorry, page not found! </NotFoundPage>;
    </>
  );
}
