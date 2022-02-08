export const getImagePerDevice = (product, width) => {
  switch (width) {
    case "lg": //1200px >
      return [product.images.gallery.desktop];
    case "sm": //600px >
      return [product.images.gallery.tablet];
    case "md": //900px >
      return [product.images.gallery.tablet];
    case "xs": //600px <
      return [product.images.gallery.mobile];
    default:
      return [product.images.gallery.desktop];
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
