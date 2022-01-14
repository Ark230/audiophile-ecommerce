import React from "react";
import { useStyles } from "./product-features.styles";

const ProductFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.featuresDetail}>
        <h2 className={classes.featuresTitle}>FEATURES</h2>
        <p className={classes.featuresParagraph}>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </p>
        <p className={classes.featuresParagraph}>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hourbattery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>

      <div className={classes.productAddons}>
        <h2>IN THE BOX</h2>
        <ul className={classes.productAddonsList}>
          <li>
            <span>1x</span> <p>Headphone Unit</p>
          </li>
          <li>
            <span>2x</span> <p>Replacement Earcup</p>
          </li>
          <li>
            <span>1x</span> <p>User Manual</p>
          </li>
          <li>
            <span>1x</span> <p>3.5mm 5mm Audio Cable</p>
          </li>
          <li>
            <span>1x</span> <p>Travel Bag</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
