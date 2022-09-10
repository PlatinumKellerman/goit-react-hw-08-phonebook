import styled from 'styled-components';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const List = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px;
  background-color: #ffffff;
`;

export const MessageWrapper = styled.div`
  display: flex;
  width: 500px;
  background-color: #ffffff;
  padding: 20px;
  justify-content: center;
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;
