import React from 'react';
import { useStyles } from './category-showcase.styles';
import { Typography } from '@material-ui/core';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import headphonesShowCase from '../../assets/img/shared/desktop/image-headphones.png'
import speakersShowCase from '../../assets/img/shared/desktop/image-speakers.png'
import earphonesShowCase from '../../assets/img/shared/desktop/image-earphones.png'


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