import React from 'react';
import {useStyles} from './product-showcase.styles';
import ZX9 from '../../assets/img/home/desktop/image-speaker-zx9.png';
import circlePattern from '../../assets/img/home/desktop/pattern-circles.svg';
import Description from '../description/description.component';


const ProductShowCase = () => {
    const classes = useStyles();
    const descriptionProps = {
        isTitleVisible: false,
        variant: 'secondary',
        productName: 'ZX9 Speaker',
        productDescription:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
    }

    return (
        <div className={classes.showcaseContainer}>
        <img className={classes.speakerShowcase} src={ZX9}/>
        <img className={classes.circlePattern} src={circlePattern}/>
        
        <div className={classes.productShowCasePosition}>
            <Description {...descriptionProps}/>
        </div>
        
        </div>
    );
};

export default ProductShowCase;