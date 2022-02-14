import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
  })
}));
