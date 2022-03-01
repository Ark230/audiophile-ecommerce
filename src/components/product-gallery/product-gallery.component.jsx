import React from "react";
import "./product-gallery.styles.scss";

const ProductGallery = ({ galleryImages }) => {
  const images = [];

  for (const imageKey in galleryImages) {
    if (imageKey !== "gallery4") {
      images.push(galleryImages[imageKey]);
    }
  }

  return (
    <div className="gallery">
      <div className="gallery__sub-gallery">
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
