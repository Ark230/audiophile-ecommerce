import React from 'react';
import {PrimaryButton, SecondaryButton} from './button.styles';


const Button = props => {
const {variant, children} = props;

   switch (variant) {
        case 'primary':
            return <PrimaryButton className={"descriptionButton"}>{children}</PrimaryButton>
        case 'secondary':
            return <SecondaryButton className={"descriptionButton"}>{children}</SecondaryButton>    
        default:
            return <PrimaryButton className={"descriptionButton"}>{children}</PrimaryButton>
    }
 
};



export default Button;