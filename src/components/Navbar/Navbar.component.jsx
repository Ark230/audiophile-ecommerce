import React from 'react';
import './Navbar.styles.scss';
import {AppBar, Grid, makeStyles, Toolbar, Typography, List, ListItem, ListItemText, Link, IconButton} from '@material-ui/core'
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import cartIcon from '../../assets/img/cart/cart-icon.svg';

const useStyles = makeStyles( theme => ({
    mainContainer: {
        display: 'flex',
    },
    nav:{
        display: 'flex'
    },
    navItem:{
        fontFamily: 'Manrope',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.2rem'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    
    return (
      <div className={classes.mainContainer}>
        <AppBar position="static">
            <Toolbar className="nav-toolbar">
                <img src={audiophileLogo} alt="Audiophile Logo"/>
                    <Grid container spacing={1} xs={6} justify="space-around" >
                        <List className={`${classes.nav} nav-underline`}>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="subtitle2" underline="none">HOME</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="subtitle2" underline="none">HEADPHONES</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="subtitle2" underline="none">SPEAKER</Link>
                            </ListItem>
                            <ListItem>
                                    <Link color="inherit" className={`${classes.navItem} nav-animation`} variant="subtitle2" underline="none">EARPHONES</Link>
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
        
      </div>        
    );
};



export default Navbar;