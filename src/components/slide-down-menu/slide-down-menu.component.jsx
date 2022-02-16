import React from "react";
import { Drawer } from "@material-ui/core";
import CategoryShowcase from "../category-showcase/category-showcase.component";
import { useStyles } from "./slide-down-menu.styles";

const SlideDownMenu = ({ open, handleSlideMenuClose }) => {
  const classes = useStyles();

  return (
    <Drawer anchor={"top"} open={open} onClose={handleSlideMenuClose}>
      <div className={classes.categoryShowcasePosition}>
        <CategoryShowcase />
      </div>
    </Drawer>
  );
};

export default SlideDownMenu;
