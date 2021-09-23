import React from 'react';
import Description from '../description/description.component';
import {useStyles} from './hero.styles';

const Hero = () => {
    const classes = useStyles();
    const descriptionProps = {
        isTitleVisible: true,
        productDetailPage: false    
    }

    return (
        <div className={classes.containerHeroPosition}>
            <Description {...descriptionProps}/>
        </div>
    );
};



export default Hero;