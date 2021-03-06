import React from "react";
import { connect } from "react-redux";
import CategoryShowcase from "../../components/category-showcase/category-showcase.component";
import Description from "../../components/description/description.component";
import { selectCategory } from "../../redux/shop/shop.selectors";
import "./category.styles.scss";

const CategoryPage = ({ category, width }) => {
  const { products } = category;

  const getImagePerDevice = (width, productName) => {
    let item = [];

    switch (width) {
      case "lg": //1200px >
        item = products.find((item) => item.name === productName);
        return item.images.desktopUrl;
      case "sm": //600px >
        item = products.find((item) => item.name === productName);
        return item.images.tabletUrl;
      case "md": //900px >
        item = products.find((item) => item.name === productName);
        return item.images.tabletUrl;
      case "xs": //600px <
        item = products.find((item) => item.name === productName);
        return item.images.mobileUrl;
      default:
        item = products.find((item) => item.name === productName);
        return item.images.desktopUrl;
    }
  };

  return (
    <div className="section-wrapper">
      {products
        ? products.map((item) => (
            <div key={item.id} className="product">
              <img
                alt="category"
                className="product__image"
                src={getImagePerDevice(width, item.name)}
              />
              <div className="description-position">
                <Description
                  isTitleVisible={true}
                  productDetailPage={false}
                  productName={item.name}
                  productDescription={item.description}
                  productId={item.id}
                  category={category.name}
                />
              </div>
            </div>
          ))
        : undefined}
      <div className="category-showcase-position">
        <CategoryShowcase />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.categoryParam)(state)
});

export default connect(mapStateToProps, null)(CategoryPage);
