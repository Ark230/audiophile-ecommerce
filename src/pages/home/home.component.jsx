

import React from 'react';
import Hero from '../../components/hero/hero.component';
import Navbar from '../../components/Navbar/Navbar.component';
import './home.styles.js'
import {useStyles} from './home.styles';
import CategoryShowcase from '../../components/category-showcase/category-showcase.component';
import ZX7Showcase from '../../components/zx7-showcase/zx7-showcase.component';
import YX1Showcase from '../../components/yx1-showcase/yx1-showcase.component';
import ZX9Showcase from '../../components/zx9-showcase/zx9-showcase.component';

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
           <main> 
                <section className={classes.heroSectionBg}>
                        <Hero/>
                </section>
                <section className={classes.mainSection}>
                    <CategoryShowcase/> 
                    <ZX9Showcase/>
                    <ZX7Showcase/>
                    <YX1Showcase/>
                </section>
            </main>
        </div>
    );
};



export default HomePage;