import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import headphonesShowCase from '../../assets/img/shared/desktop/image-headphones.png'
import speakersShowCase from '../../assets/img/shared/desktop/image-speakers.png'
import earphonesShowCase from '../../assets/img/shared/desktop/image-earphones.png'


const useStyles = makeStyles( theme => ({
    showcaseContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10rem auto 0 auto',
        '& > div:not(:last-child)': {
            marginRight: '2rem',
            [theme.breakpoints.only('xs')]:{
                marginRight: '0'
            }
        },
        [theme.breakpoints.only('xs')]:{
            flexDirection: 'column',
            height: '100rem',
            alignItems: 'center'
        }
    },
    categoryContainer:{
        position: 'relative',
        width: '35rem',
        height: '20.4rem',
        background: '#F1F1F1',
        borderRadius: '8px',
        '& > img':{
            // position: 'absolute',
            width:'28rem',
            height:'25rem',
            display: 'block',
            margin: '-10rem auto',
            // top: '-60%',
            [theme.breakpoints.up('md')]:{
                left: '10%'
            },
            [theme.breakpoints.down('sm')]:{
                position: 'revert',
                display:'block',
                margin: '-10rem auto',
                width: '22rem',
                height: '21rem'
            }
        },
    },
    categoryName:{
        textAlign:'center',
        fontSize: '1.8rem',
        lineHeight: '2.5rem',
        letterSpacing: '1.28px',
        fontWeight: 'bold',
        marginTop: '7rem',
        [theme.breakpoints.down('sm')]:{
            marginTop: '10rem'
        }
    },
    shopLink:{
        textAlign: 'center',
     '& > h4':{
        display:'inline',
        marginRight: '1rem',
        marginLeft: '4rem',
        opacity: '.5',
        fontSize: '1.3rem',
        letterSpacing: '1px',
        lineHeight: '1.8rem',
        '&:hover':{
            color: '#D87D4A',
            opacity: 'revert'
         }
     },
     '& > svg':{
         fill: '#D87D4A',
         fontSize: '3rem',
         transform: 'translateY(1rem)'
     }
    }
    // headphonesShowCase:{
    //     width:'28rem',
    //     height:'25rem',
    //     top: '-60%',
    //     left: '10%'
    // },
    // speakersShowCase:{
    //     width:'28rem',
    //     height:'25rem',
    //     top: '-60%',
    //     left: '10%'

    // },
    // earphonesShowCase:{
    //     width:'28rem',
    //     height:'25rem',
    //     top: '-60%',
    //     left: '10%'
    // }



}));


const CategoryShowcase = () => {
    const classes = useStyles();
    return (
        <div className={classes.showcaseContainer}>
            <div className={classes.categoryContainer}>
            <img className={classes.headphonesShowCase} src={headphonesShowCase}/>
                <Typography className={classes.categoryName} variant="h3">HEADPHONES</Typography>
                <div className={classes.shopLink}>
                    <Typography variant="h4">SHOP</Typography>
                    <ChevronRightIcon/>
                </div>
                
            </div>
            <div className={classes.categoryContainer}>
                <img className={classes.speakersShowCase} src={speakersShowCase}/>
                <Typography className={classes.categoryName} variant="h3">SPEAKERS</Typography>
                <div className={classes.shopLink}>
                    <Typography variant="h4">SHOP</Typography>
                    <ChevronRightIcon/>
                </div>
            </div>
            <div className={classes.categoryContainer}>
                <img className={classes.earphonesShowCase} src={earphonesShowCase}/>
                <Typography className={classes.categoryName} variant="h3">EARPHONES</Typography>
                <div className={classes.shopLink}>
                    <Typography variant="h4">SHOP</Typography>
                    <ChevronRightIcon/>
                </div>
            </div>
        </div>
    );
};



export default CategoryShowcase;