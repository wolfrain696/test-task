import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auction from 'pages/auction';
import CarsList from 'entity/cars-list';
import * as S from './styled';

function App() {
  return (
    <S.Wrapper>
      <Container>
        <Box className="header">
          <Typography variant="h1" fontSize="h3.fontSize">
            Аукционы
          </Typography>
        </Box>
        <Box>
          <Divider />
          <Box className="content">
            <Router basename="/">
              <Routes>
                <Route path="/" element={<CarsList />} />
                <Route path="/auction/:id" element={<Auction />} />
              </Routes>
            </Router>
          </Box>
        </Box>
      </Container>
    </S.Wrapper>

  );
}

export default App;
