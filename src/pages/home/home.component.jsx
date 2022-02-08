import React from "react";
import Hero from "../../components/hero/hero.component";
import "./home.styles.js";
import "./home-styles.scss";
import { useStyles } from "./home.styles";
import CategoryShowcase from "../../components/category-showcase/category-showcase.component";
import ZX7Showcase from "../../components/zx7-showcase/zx7-showcase.component";
import YX1Showcase from "../../components/yx1-showcase/yx1-showcase.component";
import ZX9Showcase from "../../components/zx9-showcase/zx9-showcase.component";

const HomePage = ({ imagesPerDevice }) => {
  const classes = useStyles({ gallery: imagesPerDevice });

  return (
    <div>
      <section className={classes.heroSectionBg}>
        <Hero />
      </section>
      <section className="main-section">
        <CategoryShowcase />
        <ZX9Showcase />
        <ZX7Showcase />
        <YX1Showcase />
      </section>
    </div>
  );
};

export default HomePage;
