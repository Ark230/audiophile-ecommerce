import { Typography, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { makeStyles, styled } from '@material-ui/core/styles';
import React from 'react';
import './description.styles.scss';

const PrimaryButton = styled(Button)(({theme}) => ({
    backgroundColor: '#D87D4A',
    color: theme.palette.getContrastText(purple[500]),
    padding: '1.5rem',
    width: '16rem',
    fontSize: '1.3rem',
    borderRadius: '0px',
    '&:hover':{
        backgroundColor: '#FBAF85'
    }
}));


const useStyles = makeStyles(theme => ({
    descriptionContainer: {
        margin: '6% 7%',
        width: '39.8rem',
        height: '34.6rem',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Manrope',
        [theme.breakpoints.down('sm')]:{
            position: 'absolute',
            margin: '0',
            textAlign: 'center',
            left: '50%',
            top: '50%'
        },
        [theme.breakpoints.only('sm')]:{
            transform: 'translate(-48%, -50%)'
        },   
        [theme.breakpoints.only('xs')]:{
            width: '32rem',
            height: '29rem',
            transform: 'translate(-48%, -40%)'
        }
    },
    newProduct:{
        opacity: '0.5',
        fontSize: '1.4rem',
        lineHeight: '1.9rem',
        letterSpacing: '1rem',
        marginBottom: '1.5rem',
        [theme.breakpoints.only('xs')]:{
            marginBottom: '1rem'
        }
    },
    productTitle:{
        fontSize: '5.6rem',
        fontWeight: 'bold',
        lineHeight: '5.8rem',
        letterSpacing: '2px',
        margin: '.8rem 0',
        [theme.breakpoints.only('xs')]:{
            fontSize: '3.6rem',
            lineHeight: '4rem'
        }
    },
    description:{
        opacity: '0.75',
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
        fontWeight: '200',
        width: '34.9rem',
        margin: '3.3rem 0',
        [theme.breakpoints.down('sm')]:{
            margin: '2.3rem auto',
            marginBottom: '2rem'
        },
        [theme.breakpoints.only('xs')]:{
            width:'83%'
        }
    },
    descriptionButton:{
        [theme.breakpoints.down('sm')]:{
            margin:'2rem auto'
        }
    }

}))


const Description = props => {
    const classes = useStyles();
    return (
        <div className={classes.descriptionContainer}>
            
            <span className={classes.newProduct}>NEW PRODUCT</span>
            <h1 className={classes.productTitle}>XX99 MARK II HEADPHONES</h1>
            <p className={classes.description}>Experience natural, lifelike audio 
                and exceptional build quality mode for the passionate music enthusiast.</p>
            <PrimaryButton className={classes.descriptionButton}>SEE PRODUCT</PrimaryButton>
        </div>
    );
};


export default Description;