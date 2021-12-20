import HomePageContainer from "./pages/home/home.container";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchCollections } from "./redux/shop/shop.actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Footer from "./components/footer/footer.component";
import Manrope from "./assets/fonts/Manrope/Manrope-VariableFont_wght.ttf";
import Navbar from "./components/Navbar/Navbar.component";
import { fetchImages } from "./redux/gallery/gallery.actions";

const breakpoints = createBreakpoints({});

const manrope = {
  fontFamily: "Manrope",
  src: `url(${Manrope}) `
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Manrope"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [manrope],
        html: {
          //big desktop
          [breakpoints.up("xl")]: {
            fontSize: "75%"
          },
          //desktop
          [breakpoints.between("md", "lg")]: {
            fontSize: "62.5%"
          },
          //tab-land
          [breakpoints.only("sm")]: {
            fontSize: "55%"
          },
          //tab-port - cells
          [breakpoints.only("xs")]: {
            fontSize: "50%"
          }
        }
      }
    }
  }
});

function App({ fetchCollections, fetchImages }) {
  useEffect(() => {
    fetchCollections();
    fetchImages();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <HomePageContainer />
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchImages: () => dispatch(fetchImages())
});

export default connect(null, mapDispatchToProps)(App);
