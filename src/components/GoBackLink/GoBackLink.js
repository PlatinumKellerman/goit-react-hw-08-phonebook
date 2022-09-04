import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: block;
  width: auto;
  margin: 20px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  &:hover,
  :focus,
  :active {
    color: blueviolet;
  }
`;
