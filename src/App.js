import HomePage from './pages/home/home.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme,  } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Footer from './components/footer/footer.component';
import Manrope from './assets/fonts/Manrope/Manrope-VariableFont_wght.ttf';
import Navbar from './components/Navbar/Navbar.component';


const breakpoints = createBreakpoints({});


const manrope = {
  fontFamily: 'Manrope',
  src: `url(${Manrope}) `
 };

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Manrope'
   },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [manrope],
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
          <Navbar/>
          <HomePage/>
          <footer>
            <Footer/>
          </footer>
      </ThemeProvider> 
    </div>  
  );
}

export default App;
