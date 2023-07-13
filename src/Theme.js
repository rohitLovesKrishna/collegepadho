import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const Theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ff9800',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Montserrat'
    ].join(','),
  },
});
export default Theme;

export function Palette() {
  return (
    <ThemeProvider theme={Theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}