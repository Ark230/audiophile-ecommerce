import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import CategoryShowcase from "../category-showcase/category-showcase.component";
import { useStyles } from "./slide-down-menu.styles";

const SlideDownMenu = ({ open }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer anchor={"top"} open={open}>
      <div className={classes.categoryShowcasePosition}>
        <CategoryShowcase />
      </div>
    </SwipeableDrawer>
  );
};

export default SlideDownMenu;
