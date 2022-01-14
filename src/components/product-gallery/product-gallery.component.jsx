import React from "react";
import { useStyles } from "./product-gallery.styles";

const ProductGallery = ({ galleryImages }) => {
  const images = [];

  for (const imageKey in galleryImages) {
    if (imageKey !== "gallery4") {
      images.push(galleryImages[imageKey]);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.galleryContainer}>
      {/* {images.map((image) => (
        <img className={classes.galleryImage} src={image} />
      ))} */}
      <div className={classes.subGalleryContainer}>
        <img src={galleryImages.gallery1} />
        <img src={galleryImages.gallery2} />
      </div>
      <img src={galleryImages.gallery3} />
    </div>
  );
};

export default ProductGallery;
