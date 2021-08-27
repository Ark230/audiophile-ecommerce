

import React from 'react';
import Hero from '../../components/hero/hero.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#ff7961'
        }
    }
});

const HomePage = props => {
    return (
        <div>
            <Navbar/>
            <section className="hero-section">
                <Hero/>
            </section>
        </div>
    );
};



export default HomePage;