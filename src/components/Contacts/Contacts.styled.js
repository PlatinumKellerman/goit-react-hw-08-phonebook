import styled from 'styled-components';

export const List = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px;
  background-color: #ffffff;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  width: 500px;
  font-size: 26px;
  font-weight: 600;
  color: #323030;
  background-color: #ffffff;
  padding-bottom: 10px;
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
