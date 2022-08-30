import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: lightsteelblue;
  padding: 30px;
`;

export const ListWrapper = styled.div`
  display: block;
  border-radius: 15px;
  height: 470px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    background-color: lightsteelblue;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    border: 1px solid transparent;
    background-clip: content-box;
    background-color: lightskyblue;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightblue;
    cursor: pointer;
  }
`;
