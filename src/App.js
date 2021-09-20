import HomePage from './pages/home/home.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme,  } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

// const theme = createMuiTheme({
//   overrides: {
//     MuiCssBaseline: {
//       '@global': {
//         html: {
//           fontSize: '62.5%'
//         }
//       },
//     },
//   },
// });

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        
        html: {
          //big desktop
          [breakpoints.up('xl')]:{
            fontSize:'75%'
          },
          //desktop
          [breakpoints.between('md', 'lg')]:{
            fontSize: '62.5%'
          },
          //tab-land
          [breakpoints.only('sm')]:{
            fontSize: '55%'
          },
          //tab-port - cells
          [breakpoints.only('xs')]:{
             fontSize: '50%'
          }
          
        }
      },
    },
  },
});



function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> 
      <CssBaseline/>
          <HomePage/>
      </ThemeProvider> 
    </div>  
  );
}

export default App;
