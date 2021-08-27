

import React from 'react';
import Hero from '../../components/hero/hero.component';
import Navbar from '../../components/Navbar/Navbar.component';
import './home.styles.scss'

const HomePage = () => {
    return (
        <div>
            <section className="hero-section-bg">
                <Navbar/>
                    <Hero/>
            </section>
        </div>
    );
};



export default HomePage;