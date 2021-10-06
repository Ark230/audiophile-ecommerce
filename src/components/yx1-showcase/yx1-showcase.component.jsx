import React from 'react';
import { useStyles } from './yx1.showcase.styles';
import Description from '../description/description.component';


const YX1Showcase = () => {
    const classes = useStyles();
    const descriptionProps = {
        isTitleVisible: false,
        variant: 'tertiary',
        productName: 'YX1 Earphones',
        productDescription: null
    }

    return (
        <div className={classes.showcaseContainer}>
            <div className={classes.productShowCaseImage}/>
            <div className={classes.descriptionShowCasePosition}>
                <Description {...descriptionProps}/>
            </div>
        </div>
    );
};

export default YX1Showcase;