

import React from 'react';
import Hero from '../../components/hero/hero.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { makeStyles } from '@material-ui/core';
import desktopImage from '../../assets/img/home/desktop/image-hero.jpg';
import tabletDesktopImage from '../../assets/img/home/tablet/image-header.jpg';
import mobileDesktopImage from '../../assets/img/home/mobile/image-header.jpg';

import './home.styles.scss'
import CategoryShowcase from '../../components/category-showcase/category-showcase.component';

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl


const useStyles = makeStyles((theme) => ({
    heroSectionBg:{
        height: '100vh',
        backgroundImage: `url(${desktopImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.between('md', 'lg')]:{
            backgroundImage: `url(${desktopImage})`,
            backgroundPosition: '55%'
        },
        [theme.breakpoints.only('sm')]:{
            backgroundImage: `url(${tabletDesktopImage})`,
            backgroundPosition: 'center'
         },
        [theme.breakpoints.only('xs')]:{
            backgroundImage: `url(${mobileDesktopImage})`
        }
    },
    mainSection:{
        padding: '10rem 10rem',
        [theme.breakpoints.down('md')]:{
            padding: '10rem 6rem'
        },
        [theme.breakpoints.down('sm')]:{
            padding: '10rem 3rem'
        }
    }

}))

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
            <section className={`${classes.heroSectionBg}`}>
                <Navbar/>
                    <Hero/>
            </section>
            <section className={classes.mainSection}>
                <CategoryShowcase/>
            </section>
        </div>
    );
};



export default HomePage;