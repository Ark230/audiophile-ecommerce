import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  speakerShowcase: ({ imagesPerDevice }) => ({
    position: "absolute",
    height: "85%",
    marginTop: "9.5rem",
    marginLeft: "12.5rem",
    zIndex: "10",
    content: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "speaker-showcase-1"
          ).imageUrl
        : undefined
    })`,
    [theme.breakpoints.down("sm")]: ({ imagesPerDevice }) => ({
      content: `url(${
        imagesPerDevice
          ? imagesPerDevice.mobile.find(
              (item) => item.place === "speaker-showcase-1"
            ).imageUrl
          : undefined
      })`,
      height: "34%",
      margin: "0",
      transform: "translate(50%, -30%)",
      bottom: "50%",
      right: "50%"
    }),
    [theme.breakpoints.only("md")]: {
      marginLeft: "7.35rem"
    }
  })
}));
