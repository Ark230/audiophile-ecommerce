import React from 'react';
import { makeStyles } from '@material-ui/core';
import ZX9 from '../../assets/img/home/desktop/image-speaker-zx9.png';
import circlePattern from '../../assets/img/home/desktop/pattern-circles.svg';
import Description from '../description/description.component';

const useStyles = makeStyles( theme => ({
    showcaseContainer:{
        height:'50rem',
        width: '91rem',
        marginTop:'10rem',
        background: '#D87D4A',
        overflow: 'hidden',
        position: 'relative'
    },
    speakerShowcase:{
        position: 'absolute',
        height: '85%',
        marginTop: '8.5rem',
        marginLeft: '10.5rem',
        zIndex: '10'
    },
    circlePattern:{
        position:'absolute',
        right:'16rem',
        top:'-7rem',
        zIndex: '5'
    }




}));



const ProductShowCase = () => {
    const classes = useStyles();

    return (
        <div className={classes.showcaseContainer}>
        <img className={classes.speakerShowcase} src={ZX9}/>
        <img className={classes.circlePattern} src={circlePattern}/>
        <Description/>
        </div>
    );
};

export default ProductShowCase;