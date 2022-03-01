import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  headphonesShowcaseImage: ({ imagesPerDevice }) => ({
    content: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "category-showcase-1"
          ).imageUrl
        : undefined
    })`
  }),
  earphonesShowcaseImage: ({ imagesPerDevice }) => ({
    content: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "category-showcase-3"
          ).imageUrl
        : undefined
    })`
  }),
  speakersShowcaseImage: ({ imagesPerDevice }) => ({
    content: `url(${
      imagesPerDevice
        ? imagesPerDevice.desktop.find(
            (item) => item.place === "category-showcase-2"
          ).imageUrl
        : undefined
    })`
  })
}));
