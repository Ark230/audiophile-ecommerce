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
        <img
          alt="product-showcase-1"
          src={galleryImages ? galleryImages.gallery1 : ""}
        />
        <img
          alt="product-showcase-2"
          src={galleryImages ? galleryImages.gallery2 : ""}
        />
      </div>
      <img
        alt="product-showcase-3"
        src={galleryImages ? galleryImages.gallery3 : ""}
      />
    </div>
  );
};

export default ProductGallery;
