import React from 'react';

import { useStyles } from './footer.styles';

const Footer = () => {

    const classes = useStyles();

    return (
    <div className={classes.footerContainer}>
        <div className={classes.footerPosition}>
            <div className={classes.footerDescription}>
                <h1 className={classes.footerDescriptionHeader}>
                    Bringing you the <span className={classes.descriptionSpan}>best</span> audio gear
                </h1>
                <p className={classes.footerDescriptionDetail}>
                   Located at the heart of New York City, Audiophile is the premier 
                   store for high end headphones, earphones, speakers, and audio
                   accessories. We have a large showroom and luxury 
                   demonstration rooms available for you to browse and
                   experience a wide range of our products. Stop by our store to 
                   meet some of the fantastic people who make Audiophile the
                   best place to buy your portable audio equipment.
                </p>
            </div>
            <img className={classes.footerImage}/>
        </div>
    </div>   
    );
};

export default Footer;