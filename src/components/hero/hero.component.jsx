import { React } from "react";
import Description from "../description/description.component";

import { useStyles } from "./hero.styles";

const Hero = (props) => {
  const classes = useStyles();
  const descriptionProps = {
    isTitleVisible: true,
    productDetailPage: false,
    productName: "XX99 Mark II Headphones",
    productDescription: `Experience natural, lifelike audio 
        and exceptional build quality mode for the passionate music enthusiast.`,
    productId: 3,
    category: "headphones"
  };

  return (
    <div className={classes.containerHeroPosition}>
      <Description {...descriptionProps} />
    </div>
  );
};

export default Hero;
