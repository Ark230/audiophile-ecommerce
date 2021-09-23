import React from 'react';
import {useStyles} from './description.styles';
import Button  from '../button/button.component';

const Description = props => {
    const {isTitleVisible, productDetailPage} = props;
    const classes = useStyles();
    
    return (
        <div className={classes.descriptionContainer}>
            { isTitleVisible && <span className={classes.newProduct}>NEW PRODUCT</span>}
            <h1 className={classes.productTitle}>XX99 MARK II HEADPHONES</h1>
            <p className={classes.description}>Experience natural, lifelike audio 
                and exceptional build quality mode for the passionate music enthusiast.</p>
            
            { productDetailPage ?
                (<div>
                    <h2 className={classes.productPrice}>$ 1,750</h2>
                    <div className={classes.quantityInput}>
                        <p className={classes.quantitySelector}>-</p>
                        <p>1</p>
                        <p className={classes.quantitySelector}>+</p>
                     </div>   
                    <Button variant="primary">ADD TO CART</Button>
                </div>
                )
                :
                <Button variant="primary" className={classes.descriptionButton}>SEE PRODUCT</Button>
            }
        </div>
    );
};


export default Description;