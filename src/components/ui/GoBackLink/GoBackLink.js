import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  width: auto;
  margin: 20px;
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  &:hover,
  :focus,
  :active {
    color: #d55448;
  }
`;
