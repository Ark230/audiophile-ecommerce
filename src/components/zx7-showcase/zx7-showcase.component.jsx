import { useStyles } from './zx7-showcase.styles';
import React from 'react';
import Description from '../description/description.component';


const ZX7Showcase = () => {
    const classes = useStyles();
    const descriptionProps = {
        isTitleVisible: false,
        variant: 'tertiary',
        productName: 'ZX7 Speaker',
        productDescription: null
    }


    return (
        <div className={classes.showcaseContainer}>
           <div className={classes.descriptionShowCasePosition}> 
              <Description {...descriptionProps}/>
           </div> 
        </div>
    );
};

export default ZX7Showcase;