import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import App from './App';

const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />

      <App />
    </Provider>
  </ThemeProvider>,
);
