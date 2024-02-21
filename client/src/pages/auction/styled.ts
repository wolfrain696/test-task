import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';

export const AuctionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageWrapper = styled(Paper)`
    max-width: 400px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
`;
