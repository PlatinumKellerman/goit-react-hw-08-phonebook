import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  &.active {
    background-color: skyblue;
    border-radius: 5px;
    padding: 5px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blueviolet;
  }
`;

export const StyledButton = styled.button``;
