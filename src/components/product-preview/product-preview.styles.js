import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  descriptionContainerPosition: {
    marginLeft: "13rem",
    alignSelf: "center",
    width: "51%",
    "& > [class*=descriptionContainer]": {
      color: "black",
      "& > [class*=newProduct]": {
        color: "#D87D4A",
        opacity: "revert",
        [theme.breakpoints.down("xs")]: {
          width: "max-content"
        }
      },
      "& > [class*=productTitle]": {
        fontSize: "4rem",
        width: "37.5rem",
        [theme.breakpoints.down("md")]: {
          fontSize: "3.5rem",
          lineHeight: "revert",
          width: "min-content"
        },
        [theme.breakpoints.down("xs")]: {
          width: "fit-content"
        }
      },
      "& > [class*=descriptionText]": {
        opacity: "0.5",
        width: "42.9rem",
        [theme.breakpoints.between("sm", "md")]: {
          textAlign: "justify",
          margin: "1rem 0",
          width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%"
        }
      },
      "& > div > .descriptionButton": {
        [theme.breakpoints.down("md")]: {
          margin: "1rem auto"
        },
        [theme.breakpoints.down("xs")]: {
          width: "14rem"
        }
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: "5rem"
      }
    },
    [theme.breakpoints.down("md")]: {
      margin: "5rem 0 5rem 0",
      justifyContent: "space-evenly"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0 3rem 5rem"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5rem 0 0 0",
      alignSelf: "revert",
      width: "100%"
    }
  },
  productContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10rem",
    "& > img": {
      width: "52rem",
      height: "53rem",
      borderRadius: "8px",
      [theme.breakpoints.between("sm", "md")]: {
        height: "55rem",
        width: "40%",
        padding: "0"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "100%"
      }
    },
    // [theme.breakpoints.between("sm", "md")]: {
    //   paddingRight: "0",
    //   justifyContent: "space-around"
    // },
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "space-between",
      width: "100%"
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "8rem"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  }
}));
