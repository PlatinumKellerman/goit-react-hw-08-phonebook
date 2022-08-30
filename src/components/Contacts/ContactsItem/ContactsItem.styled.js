import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const ItemName = styled.p`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const ItemNumber = styled.p`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const DeleteButton = styled.button`
  background-color: azure;
  width: 60px;
  border: 1px solid azure;
  border-radius: 5px;
  :hover,
  :focus,
  :active {
    background-color: red;
    color: aliceblue;
    cursor: pointer;
    border: 1px solid red;
  }
`;
