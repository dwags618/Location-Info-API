import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import AppRouter from './components/AppRouter';
import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    title: {
      color: '#989a9c',
    }
  },
  palette: {
    background: {
      default: '#eaecee'
    },
    error: {
      main: '#db3d22'
    },
    primary: {
      main: '#194f90'
    }
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        height: 10,
      },
      primaryColor: {
        backgroundColor: '#c1c4c9',
      },
      primaryColorBar: {
        background: 'linear-gradient(90deg, #005f9f, #b63e95)',
      }
    },
    MuiRadio: {
      checked: {
        color: '#194f90'
      }
    },
    MuiTab: {
      rootInherit: {
        backgroundColor:'#d4d6d8',
        color:'#989a9c',
        margin:0,
        minWidth:0,
        maxWidth:'100%'
      },
      rootInheritSelected: {
        backgroundColor: '#4ac3e2',
        color:'#ffffff'
      },
    },
    MuiTableBody: {
      root: {
        'tr:nth-of-type(even)': {
          backgroundColor: '#eff8fb'
        }
      }
    },
    MuiTableCell: {
      paddingDefault: {
        padding:'8px 16px'
      },
      root: {
        borderColor:'#b1e5f1 !important'
      },
      typeHead: {
        background: '#60cae4',
        color: '#ffffff',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    },
    MuiTableRow: {
      root: {
        height:38,
        'tbody &:nth-of-type(even)': {
          backgroundColor: '#eff8fb'
        }
      },
      typeHead: {
        height:32
      }
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Reboot />
      <AppRouter />
    </MuiThemeProvider>
  );
};

export default App;
