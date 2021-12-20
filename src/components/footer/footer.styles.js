import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footerContainer: {},
  footerPosition: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10rem 14.5rem",
    marginTop: "-3rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "5rem 2.5rem"
    },
    [theme.breakpoints.only("md")]: {
      padding: "5rem 9rem"
    }
  },
  footerDescription: {
    width: "50%",
    margin: "auto auto",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "0",
      padding: "0 0",
      width: "revert"
    },
    [theme.breakpoints.only("sm")]: {
      width: "revert",
      marginTop: "5rem",
      marginLeft: "4rem",
      order: "1",
      padding: "0rem 5rem",
      textAlign: "center"
    }
  },

  footerDescriptionHeader: {
    width: "90%",
    fontSize: "4rem",
    lineHeight: "4.4rem",
    letterSpacing: "1.4px",
    marginBottom: "1rem",
    marginTop: "0",
    textTransform: "uppercase",
    [theme.breakpoints.only("xs")]: {
      margin: "3rem 3rem",
      textAlign: "center"
    },
    [theme.breakpoints.only("sm")]: {
      width: "revert"
    }
  },
  footerDescriptionDetail: {
    width: "75%",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontWeight: "200",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center"
    },
    [theme.breakpoints.down("sm")]: {
      width: "revert"
    }
  },
  descriptionSpan: {
    color: "#D87D4A"
  },
  footerImage: ({ imagesPerDevice }) => ({
    content: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "footer-image-1"
          ).imageUrl
        : undefined
    })`,
    borderRadius: ".8rem",
    height: "fit-content",
    width: "49%",
    [theme.breakpoints.only("xs")]: ({ imagesPerDevice }) => ({
      content: `url(${
        imagesPerDevice
          ? imagesPerDevice.mobile.find(
              (item) => item.place === "footer-image-1"
            ).imageUrl
          : undefined
      })`
    }),
    [theme.breakpoints.down("sm")]: ({ imagesPerDevice }) => ({
      content: `url(${
        imagesPerDevice
          ? imagesPerDevice.tablet.find(
              (item) => item.place === "footer-image-1"
            ).imageUrl
          : undefined
      })`,
      width: "100%",
      order: "-1"
    })
  }),
  footerRedirection: {
    background: "#101010",
    padding: "4rem 14.5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "3rem 2.5rem"
    },
    [theme.breakpoints.only("md")]: {
      padding: "3rem 9rem"
    }
  },
  footerRedirectionDescription: {
    width: "46%",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontWeight: "200",
    opacity: "0.5",
    color: "#FFFFFF",
    margin: "3rem 0",
    [theme.breakpoints.only("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.only("xs")]: {
      width: "revert",
      textAlign: "center",
      margin: "2rem 0"
    }
  },
  footerSocials: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.only("sm")]: {
      flexDirection: "row"
    }
  },
  footerCopyright: {
    color: "#FFFFFF",
    opacity: "0.5",
    fontSize: "1.5rem",
    fontWeight: "200",
    lineHeight: "2.5rem",
    order: "1",
    [theme.breakpoints.down("sm")]: {
      order: "revert"
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      marginBottom: "4rem"
    }
  },
  footerSocialsIcons: {
    order: "-1",
    display: "flex",
    alignItems: "center",
    alignSelf: "end",
    "& > svg:not(:last-child)": {
      marginRight: "2rem"
    },

    [theme.breakpoints.down("sm")]: {
      order: "revert",
      alignSelf: "center"
    }
  },
  footerSocialSvg: {
    fill: "white",
    cursor: "pointer",
    "&:nth-child(2)": {
      marginTop: ".5rem"
    },
    "& :hover": {
      fill: "#D87D4A"
    }
  }
}));
