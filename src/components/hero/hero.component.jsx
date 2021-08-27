import React from 'react';
import './hero.styles.scss';
import Description from '../description/description.component';

const Hero = props => {
    return (
        <div className="hero-bg">
            <Description />
        </div>
    );
};



export default Hero;