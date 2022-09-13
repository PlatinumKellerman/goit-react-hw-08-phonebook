import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 6px 26px;
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthNavTitle = styled.p`
  text-transform: uppercase;
  color: #cdbea7;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 5px;
`;
