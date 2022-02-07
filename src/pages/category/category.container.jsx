import React from "react";
import { useParams } from "react-router-dom";

import CategoryPage from "./category.component";
import { withWidth } from "@material-ui/core";

const CategoryContainer = ({ width }) => {
  const params = useParams();
  const { categoryId } = params;

  return (
    <div>
      <CategoryPage categoryParam={categoryId} width={width} />
    </div>
  );
};

export default withWidth()(CategoryContainer);
