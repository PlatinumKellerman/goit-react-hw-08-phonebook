import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMail = styled.p`
  cursor: pointer;
  font-weight: 500;
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    color: tomato;
    font-weight: 500;
  }
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
`;
