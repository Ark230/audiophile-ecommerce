import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  heroSectionBg: ({ gallery }) => ({
    height: "100vh",
    backgroundImage: `url(${
      gallery
        ? gallery.desktop.map((item) =>
            item.place === "home-hero" ? item.imageUrl : undefined
          )
        : undefined
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.between("md", "lg")]: ({ gallery }) => ({
      backgroundImage: `url(${
        gallery
          ? gallery.desktop.map((item) =>
              item.place === "home-hero" ? item.imageUrl : undefined
            )
          : undefined
      })`,
      backgroundPosition: "55%"
    }),
    [theme.breakpoints.only("sm")]: ({ gallery }) => ({
      backgroundImage: `url(${
        gallery
          ? gallery.tablet.map((item) =>
              item.place === "home-hero" ? item.imageUrl : undefined
            )
          : undefined
      })`,
      backgroundPosition: "center"
    }),
    [theme.breakpoints.only("xs")]: ({ gallery }) => ({
      backgroundImage: `url(${
        gallery
          ? gallery.mobile.map((item) =>
              item.place === "home-hero" ? item.imageUrl : undefined
            )
          : undefined
      })`
    })
  }),
  mainSection: {
    padding: "10rem 14.5rem",
    [theme.breakpoints.only("md")]: {
      padding: "10rem 9rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10rem 2.5rem"
    }
  }
}));
