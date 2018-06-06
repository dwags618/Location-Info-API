import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import AppRouter from './components/AppRouter';
import 'typeface-roboto';

const App = () => {
  return (
    <MuiThemeProvider>
      <Reboot />
      <AppRouter />
    </MuiThemeProvider>
  );
};

export default App;
