import { Typography, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import './description.styles.scss';

const PrimaryButton = styled(Button)(({theme}) => ({
    backgroundColor: '#D87D4A',
    color: theme.palette.getContrastText(purple[500]),
    padding: '1.5rem',
    width: '16rem',
    fontSize: '1.3rem'

}));


const Description = props => {
    return (
        <div className="description-container">
            
            <span className="description-container__new-product">NEW PRODUCT</span>
            <h1 className="description-container__product-title">XX99 MARK II HEADPHONES</h1>
            <p className="description-container__description">Experience natural, lifelike audio 
                and exceptional build quality mode for the passionate music enthusiast.</p>
            <PrimaryButton>SEE PRODUCT</PrimaryButton>
        </div>
    );
};


export default Description;