import React from "react";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { connect } from "react-redux";
import { selectProductDetails } from "../../redux/shop/shop.selectors";
import {
  getCrossSellImagesPerDevice,
  getImagePerDevice
} from "./product-detail.utils";
import "./product-detail.styles.scss";
import ProductFeatures from "../../components/product-features/product-features.component";
import ProductGallery from "../../components/product-gallery/product-gallery.component";
import ProductCrossSell from "../../components/product-cross-sell/product-cross-sell.component";
import { selectSharedImages } from "../../redux/gallery/gallery.selectors";
import CategoryShowcase from "../../components/category-showcase/category-showcase.component";

const ProductDetailPage = (props) => {
  let width = props.width;

  let [[product]] = props.product.length > 0 ? props.product : [[]];

  const [productGallery] =
    props.product.length > 0 ? getImagePerDevice(product, width) : [];

  const crossSellImages = getCrossSellImagesPerDevice(
    props.sharedImages,
    width
  );

  return (
    <div className="product-detail-wrapper">
      <ProductPreview product={product} productImage={productGallery} />
      <ProductFeatures product={product} />
      <ProductGallery galleryImages={productGallery} />
      <ProductCrossSell crossSellImages={crossSellImages} />
      <div className="product-detail-wrapper__category-showcase-position">
        <CategoryShowcase />
      </div>
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
