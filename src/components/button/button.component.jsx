import React from 'react';
import { PrimaryButton, SecondaryButton } from './button.styles';

const Button = props => {
const {variant, children} = props;

   switch (variant) {
        case 'primary':
            return <PrimaryButton>{children}</PrimaryButton>
        case 'secondary':
            return <SecondaryButton>{children}</SecondaryButton>    
        default:
            return <PrimaryButton>{children}</PrimaryButton>
    }
 
};



export default Button;