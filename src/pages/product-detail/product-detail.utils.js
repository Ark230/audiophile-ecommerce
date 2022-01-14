export const getImagePerDevice = (product, width) => {
  switch (width) {
    case "lg": //1200px >
      return [product.images[0].gallery[0].desktop];
    case "sm": //600px >
      return [product.images[0].gallery[0].tablet];
    case "md": //900px >
      return [product.images[0].gallery[0].tablet];
    case "xs": //600px <
      return [product.images[0].gallery[0].mobile];
    default:
      return [product.images[0].gallery[0].desktop];
  }
};

export const getCrossSellImagesPerDevice = (product, width) => {
  switch (width) {
    case "lg": //1200px >
      return product.gallery.desktop.filter(
        (image) => image.place === "cross-sell-product"
      );
    case "sm": //600px >
      return product.gallery.tablet.filter(
        (image) => image.place === "cross-sell-product"
      );
    case "md": //900px >
      return product.gallery.tablet.filter(
        (image) => image.place === "cross-sell-product"
      );
    case "xs": //600px <
      return product.gallery.mobile.filter(
        (image) => image.place === "cross-sell-product"
      );
    default:
      return product.gallery.desktop.filter(
        (image) => image.place === "cross-sell-product"
      );
  }
};
