import styled from 'styled-components';
import { GoBackLink } from '../../components/ui/GoBackLink/GoBackLink';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const NotFoundPage = styled.div`
  background-color: #fff;
  margin-right: auto;
  margin-left: auto;
  width: 700px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: red;
`;

export function PageNotFound() {
  return (
    <>
      <GoBackLink to={'/'}>
        <ArrowCircleLeftOutlinedIcon
          sx={{ fontSize: 60, marginRight: '15px' }}
        />{' '}
        Go back
      </GoBackLink>
      <NotFoundPage>
        <DangerousOutlinedIcon sx={{ fontSize: 70, marginRight: '20px' }} />
        Sorry, page not found!
      </NotFoundPage>
      ;
    </>
  );
}

export default NotFoundPage;
