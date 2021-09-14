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
    fontSize: '1.3rem'
}));
//background-position: center??
//calc(100vh - 82vh) auto; 600p< hacia abajo
//calc(100vh - 87vh) calc(100vw - 73.5vw); -->600px hacia arriba

const useStyles = makeStyles(theme => ({
    descriptionContainer: {
        position: 'absolute',
        width: '39.8rem',
        height: '34.6rem',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Manrope',
        top: '22.5rem',
        left: '16.5rem',
        [theme.breakpoints.only('sm')]:{
            textAlign:'center',
            width: '38rem',
            left:'50%',
            top: '50%',
            transform: 'translate(-48%, -50%)'

        },   
        [theme.breakpoints.only('xs')]:{
            textAlign:'center',
            top: '50%',
            left:'50%',
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
            margin: '.3rem auto',
            marginBottom: '2rem'
        },
        [theme.breakpoints.only('xs')]:{
            width:'80%'
        }
    },
    descriptionButton:{
        [theme.breakpoints.down('sm')]:{
            margin:'0 auto'
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