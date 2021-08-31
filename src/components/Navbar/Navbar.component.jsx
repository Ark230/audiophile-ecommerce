import React from 'react';
import './Navbar.styles.scss';
import {AppBar, Grid, makeStyles, Toolbar, 
        List, ListItem, Link, IconButton,
        } from '@material-ui/core'
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import cartIcon from '../../assets/img/cart/cart-icon.svg';


const useStyles = makeStyles( theme => ({
    mainContainer: {
        display: 'flex',
    },
    nav:{
        display: 'flex'
    },
    appBar:{
        padding: '2rem 2.5rem',
        boxShadow: 'none'
    },
    navItem:{
        fontFamily: 'Manrope',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.3rem',
        color:'#ffff',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    }

}));

const Navbar = () => {
    const classes = useStyles();
    
    return (
        
        <AppBar position="static" className={classes.appBar} color="transparent">
            <Toolbar className="nav-toolbar">
                <img src={audiophileLogo} alt="Audiophile Logo"/>
                    <Grid container spacing={1} xs={6} justify="space-around" >
                        
                        <List className={`${classes.nav} nav-underline`}>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="h5" underline="none">HOME</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="h5" underline="none">HEADPHONES</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="h5" underline="none">SPEAKER</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="h5" underline="none">EARPHONES</Link>
                            </ListItem>
                        </List>

                    </Grid>

                    <IconButton 
                        color="inherit"
                        aria-label="menu"
                        >
                        <img src={cartIcon} alt="Cart Icon"/>
                    </IconButton>    

            </Toolbar>
        </AppBar>
        
      
    );
};



export default Navbar;