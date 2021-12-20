import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  showcaseContainer: ({ imagesPerDevice }) => ({
    height: "34rem",
    position: "relative",
    background: "gray",
    marginTop: "6rem",
    borderRadius: ".8rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "speaker-showcase-2"
          ).imageUrl
        : undefined
    })`,
    [theme.breakpoints.only("xs")]: ({ imagesPerDevice }) => ({
      backgroundImage: `url(${
        imagesPerDevice
          ? imagesPerDevice.mobile.find(
              (item) => item.place === "speaker-showcase-2"
            ).imageUrl
          : undefined
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50rem"
    }),
    [theme.breakpoints.only("sm")]: ({ imagesPerDevice }) => ({
      backgroundImage: `url(${
        imagesPerDevice
          ? imagesPerDevice.tablet.find(
              (item) => item.place === "speaker-showcase-2"
            ).imageUrl
          : undefined
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "38rem"
    })
  }),
  descriptionShowCasePosition: {
    position: "absolute",
    left: "8%",
    top: "24%",
    "& > [class*=descriptionContainer]": {
      "& > [class*=productTitle]": {
        color: "#000000",
        fontSize: "3.5rem",
        lineHeight: "4.75rem",
        letterSpacing: ".25rem"
      },
      "& > [class*=descriptionButton]": {
        [theme.breakpoints.only("xs")]: {
          width: "20rem",
          fontSize: "1.625rem",
          lineHeight: "2.25rem"
        }
      }
    }
  }
}));
