import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

export const PrimaryButton = styled(Button)(({theme}) => ({
    backgroundColor: '#D87D4A',
    color: '#FFFFFF',
    padding: '1.5rem',
    width: '16rem',
    fontSize: '1.3rem',
    borderRadius: '0px',
    '&:hover':{
        backgroundColor: '#FBAF85'
    }
}));


export const SecondaryButton = styled(Button)(({theme}) => ({
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '1.5rem',
    width: '16rem',
    fontSize: '1.3rem',
    borderRadius: '0px',
    '&:hover':{
        backgroundColor: '#4C4C4C'
    }
}));
