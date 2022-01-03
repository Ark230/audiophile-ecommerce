import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import CategoryShowcase from "../../components/category-showcase/category-showcase.component";

import Description from "../../components/description/description.component";
import { selectCategory } from "../../redux/shop/shop.selectors";
import { useStyles } from "./category.styles";

/* breakpoints */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const CategoryPage = ({ category, width }) => {
  const classes = useStyles();
  const { products } = category;

  const getImagePerDevice = (width, productName) => {
    let item = [];

    switch (width) {
      case "lg": //1200px >
        item = products.find((item) => item.name === productName);
        return item.images[0].desktopUrl;
      case "sm": //600px >
        item = products.find((item) => item.name === productName);
        return item.images[0].tabletUrl;
      case "md": //900px >
        item = products.find((item) => item.name === productName);
        return item.images[0].tabletUrl;
      case "xs": //600px <
        item = products.find((item) => item.name === productName);
        return item.images[0].mobileUrl;
      default:
        item = products.find((item) => item.name === productName);
        return item.images[0].desktopUrl;
    }
  };

  // const descriptionProps = {
  //   isTitleVisible: true,
  //   productDetailPage: false,
  //   productName: "XX99 Mark II Headphones",
  //   productDescription: `The new XX99 Mark II headphones is the pinnacle of pristine audio.
  //   It redefines your premium headphone experience by reproducing the balanced depth and precision
  //   of studio-quality sound.`
  // };

  return (
    <div className={classes.wrapper}>
      {products
        ? products.map((item) => (
            <div className={classes.productContainer}>
              <img
                className={classes.productImage}
                src={getImagePerDevice(width, item.name)}
              />
              <div className={classes.descriptionContainerPosition}>
                <Description
                  isTitleVisible={true}
                  productDetailPage={false}
                  productName={item.name}
                  productDescription={item.description}
                />
              </div>
            </div>
          ))
        : undefined}
      <div className={classes.categoryShowcasePosition}>
        <CategoryShowcase />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.categoryParam)(state)
});

export default connect(mapStateToProps, null)(CategoryPage);
