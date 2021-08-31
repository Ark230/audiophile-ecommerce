import HomePage from './pages/home/home.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme,  } from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%'

        },
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
