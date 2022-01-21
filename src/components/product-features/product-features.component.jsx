import React from "react";
import { useStyles } from "./product-features.styles";

const ProductFeatures = ({ product }) => {
  const classes = useStyles();
  const { productFeatures } = product ? product : {};

  return (
    <div className={classes.featuresSection}>
      <div className={classes.featuresDetail}>
        <h2 className={classes.featuresTitle}>FEATURES</h2>
        {productFeatures
          ? productFeatures.featureDescription
              .split("\\n")
              .map((item, idx) => (
                <p className={classes.featuresParagraph}>{item}</p>
              ))
          : ""}
      </div>

      <div className={classes.productAddons}>
        <h2>IN THE BOX</h2>
        <ul className={classes.productAddonsList}>
          {productFeatures
            ? productFeatures.addons.map((addon) => (
                <li>
                  <span>{addon.quantity}</span> <p>{addon.name}</p>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
