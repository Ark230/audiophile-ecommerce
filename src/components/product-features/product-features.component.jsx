import React from "react";
import "./product-features.styles.scss";

const ProductFeatures = ({ product }) => {
  const { productFeatures } = product ? product : {};

  return (
    <div className="features">
      <div className="features__detail">
        <h2 className="features__detail__title">FEATURES</h2>
        {productFeatures
          ? productFeatures.featureDescription.split("\\n").map((item, idx) => (
              <p key={idx} className="features__detail__paragraph">
                {item}
              </p>
            ))
          : ""}
      </div>

      <div className="features__product-addons">
        <h2>IN THE BOX</h2>
        <ul className="feature__product-addons__list">
          {productFeatures
            ? productFeatures.addons.map((addon, idx) => (
                <li key={idx}>
                  <span>{addon.quantity}</span> <p>{addon.name}</p>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
