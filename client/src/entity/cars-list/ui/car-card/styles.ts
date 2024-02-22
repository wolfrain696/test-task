import styled from '@emotion/styled';
import { CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    .card {
        width: 360px;
        position: relative;
    }
`;
export const StyledCardHeader = styled(CardHeader)`
    background-color: lightgrey;
    height: 48px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Price = styled.div`
  max-width: 150px;
  padding: 4px;
  background-color: lightgrey; 
  position: absolute;
  bottom: 0;
  right: 0;
`;
