import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Manrope",
    "& > button": {
      marginTop: "2rem"
    }
  },
  newProduct: {
    opacity: "0.5",
    fontSize: "1.4rem",
    lineHeight: "1.9rem",
    letterSpacing: "1rem",
    marginBottom: "1.5rem",
    [theme.breakpoints.only("xs")]: {
      marginBottom: "1rem"
    }
  },
  productTitle: {
    fontSize: "5.6rem",
    fontWeight: "bold",
    lineHeight: "5.8rem",
    letterSpacing: "2px",
    margin: ".8rem 0",
    [theme.breakpoints.only("xs")]: {
      fontSize: "3.6rem",
      lineHeight: "4rem"
    }
  },
  descriptionText: {
    opacity: "0.75",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontWeight: "200",
    width: "34.9rem",
    marginTop: "1rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2.3rem auto",
      marginBottom: "2rem"
    },
    [theme.breakpoints.only("xs")]: {
      width: "83%"
    }
  },
  quantityInput: {
    display: "inline-flex",
    fontSize: "1.2rem",
    background: "#F1F1F1",
    color: "black",
    width: "10rem",
    padding: ".55rem .5rem",
    justifyContent: "space-around",
    marginRight: "2rem",
    transform: "translateY(.25rem)"
  },
  productPrice: {
    marginBottom: "3rem",
    fontWeight: "bold",
    fontSize: "1.8rem",
    lineHeight: "2.5rem"
  },
  quantitySelector: {
    cursor: "pointer",
    "&:hover": {
      color: "#D87D4A"
    }
  }
}));
