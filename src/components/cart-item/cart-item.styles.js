import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "absolute",
    right: "5%",
    width: "40rem",
    backgroundColor: "white",
    padding: "4rem",
    borderRadius: "8px",
    [theme.breakpoints.down("xs")]: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    [theme.breakpoints.between("sm", "lg")]: {
      top: "13rem"
    }
  },
  boxHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem"
  },
  removeItems: {
    cursor: "pointer",
    "&:hover": {
      color: "#D87D4A"
    }
  },
  cartItems: {
    display: "flex",
    fontSize: "1.5rem",
    flexDirection: "column",
    overflow: "scroll",
    maxHeight: "27rem"
  },
  productDetail: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem"
  },
  productInformationContainer: {
    display: "flex",
    "& > div": {
      marginLeft: "1rem"
    }
  },
  productInformation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  productName: {
    fontWeight: "bold",
    margin: 0
  },
  productPrice: {
    margin: 0
  },
  quantityInput: {
    display: "inline-flex",
    fontSize: "1rem",
    background: "#F1F1F1",
    color: "black",
    width: "8rem",
    padding: ".55rem .5rem",
    justifyContent: "space-around",
    height: "fit-content",
    transform: "translateY(.25rem)",
    marginTop: "1.5rem"
  },
  quantitySelector: {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.3rem",
    "&:hover": {
      color: "#D87D4A"
    }
  },
  itemQuantity: { fontSize: "1.3rem", fontWeight: "bold" },
  buttonPosition: {
    "& > button": {
      width: "100%"
    }
  },
  cartProductImage: {
    height: "64px",
    width: "64px",
    borderRadius: "8px"
  },
  noItemsFound: {
    fontSize: "3rem",
    textAlign: "center"
  },
  cartTotal: {
    display: "flex",
    justifyContent: "space-between",
    "& > p": { fontSize: "1.4rem", "&:last-child": { fontWeight: "bold" } }
  }
}));
