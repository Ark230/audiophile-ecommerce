

import React from 'react';
import Hero from '../../components/hero/hero.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { Divider, makeStyles } from '@material-ui/core';
import desktopImage from '../../assets/img/home/desktop/image-hero.jpg';

import './home.styles.scss'

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
        backgroundPosition: 'top',
        [theme.breakpoints.between('md', 'lg')]:{
            backgroundPosition: '55%'
        }
    },
    navDivider: {
        background: '#ffffff',
        opacity: '0.2',
        [theme.breakpoints.up('lg')]:{
            marginLeft:'11.5rem',
            marginRight:'11.5rem'
        },
        [theme.breakpoints.down('md')]:{
            marginLeft:'9.5rem',
            marginRight:'9.5rem'
        }
    }

}))

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
            <section className={`${classes.heroSectionBg}`}>
                <Navbar/>
               <div> <Divider className={`${classes.navDivider} nav-divider`} variant="middle" light={true}/></div>
                    <Hero/>
            </section>
        </div>
    );
};



export default HomePage;