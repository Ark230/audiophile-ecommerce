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
      <div className={classes.subGalleryContainer}>
        <img src={galleryImages ? galleryImages.gallery1 : ""} />
        <img src={galleryImages ? galleryImages.gallery2 : ""} />
      </div>
      <img src={galleryImages ? galleryImages.gallery3 : ""} />
    </div>
  );
};

export default ProductGallery;
