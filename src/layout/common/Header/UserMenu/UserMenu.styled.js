import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserMail = styled.p`
  font-size: 18px;
  text-decoration: none;
  color: #cdbea7;
  cursor: pointer;
  font-weight: 500;
  margin-right: 30px;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    color: #d55448;
    font-weight: 500;
  }
`;
