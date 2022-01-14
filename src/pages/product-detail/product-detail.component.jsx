import React from "react";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { connect } from "react-redux";
import { selectProductDetails } from "../../redux/shop/shop.selectors";
import {
  getCrossSellImagesPerDevice,
  getImagePerDevice
} from "./product-detail.utils";
import { useStyles } from "./product.detail.styles";
import ProductFeatures from "../../components/product-features/product-features.component";
import ProductGallery from "../../components/product-gallery/product-gallery.component";
import ProductCrossSell from "../../components/product-cross-sell/product-cross-sell.component";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";
import CategoryShowcase from "../../components/category-showcase/category-showcase.component";

const ProductDetailPage = (props) => {
  const classes = useStyles();
  let width = props.width;
  let [[product]] = props.product ? props.product : [];
  const [productGallery] = getImagePerDevice(product, width);
  const crossSellImages = getCrossSellImagesPerDevice(
    props.sharedImages,
    width
  );

  return (
    <div className={classes.productDetailWrapper}>
      <ProductPreview product={product} productImage={productGallery} />
      <ProductFeatures />
      <ProductGallery galleryImages={productGallery} />
      <ProductCrossSell crossSellImages={crossSellImages} />

      <CategoryShowcase />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: selectProductDetails(ownProps.productId)(state),
    sharedImages: selectSharedImages(state)
  };
};

export default connect(mapStateToProps, null)(ProductDetailPage);
