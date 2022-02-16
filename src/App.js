import HomePageContainer from "./pages/home/home.container";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, withWidth } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Footer from "./components/footer/footer.component";
import Manrope from "./assets/fonts/Manrope/Manrope-VariableFont_wght.ttf";
import Navbar from "./components/Navbar/Navbar.component";
import { fetchImages } from "./redux/gallery/gallery.actions";
import Wrapper from "./components/wrapper/wrapper.component";
import { fetchCollections } from "./redux/shop/shop.actions";
import CategoryContainer from "./pages/category/category.container";
import { Routes, Route } from "react-router-dom";
import { setUrlPathName } from "./redux/path/path.actions";
import ProductDetailContainer from "./pages/product-detail/product-detail.container";

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
    },
    MuiDrawer: {
      root: { zIndex: "200 !important" },
      paperAnchorTop: {
        top: "70px",
        [breakpoints.down("xs")]: {
          height: "40rem"
        }
      }
    }
  }
});

function App({ fetchImages, fetchCollections, setUrlPathName, width }) {
  useEffect(() => {
    fetchImages();
    fetchCollections();
    setUrlPathName();
  }, [fetchImages, fetchCollections]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Wrapper>
          <main>
            <Routes>
              <Route path="/" element={<HomePageContainer />} />
              <Route
                path="/category/:categoryId"
                element={<CategoryContainer />}
              />
              <Route
                path="/category/:categoryId/:productId"
                element={<ProductDetailContainer />}
              />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
  setUrlPathName: () => dispatch(setUrlPathName(window.location.pathname)),
  fetchCollections: () => dispatch(fetchCollections())
});

export default compose(connect(null, mapDispatchToProps), withWidth())(App);
