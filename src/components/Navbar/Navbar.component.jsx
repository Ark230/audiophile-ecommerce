import React, { useState } from 'react';
import {AppBar, Grid, Toolbar, 
        List, ListItem, Link, IconButton, Drawer, Divider, ListItemText, Typography,
        } from '@material-ui/core'
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import cartIcon from '../../assets/img/cart/cart-icon.svg';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from 'clsx';
import { useStyles } from './navbar.styles';



const Navbar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    const [menuName, setMenuName] = useState(null);

    const mainMenuListArr = ['Headphones', 'Earphones', 'Speakers'];

    const subMenuObj = {
        headphones:[
            {name:'XX99 Mark II Headphones'},
            {name:'XX99 Mark I Headphones'},
            {name:'XX59 Headphones'}
        ],
        speakers:[
            {name: 'ZX9 Speaker'},
            {name: 'ZX7 Speaker'}
        ],
        earphones:[
            {name: 'YX1 Wireless Earphones'}
        ]
    };

   const hasSubMenu = (item) => (
        subMenuObj[item] ? true: false
   )

    const displayMenuItems = () => {
        

        let menuItemList = menuName ? subMenuObj[menuName] : mainMenuListArr;

        if(menuName){
            menuItemList = menuItemList.map(item => {
                if(typeof(item) === 'object'){
                    return item.name;
                }
            });
            
        }

        const clickListener = (text) => {
            if(!menuName){ 
                return setMenuName(text.toLowerCase());
            }
        }

        return(
            <div className={classes.list} role="presentation">
               { !menuName && <Typography variant="h6" align="center">Categories</Typography>}
                <Divider/>
                <List>
                    {
                      
                      menuItemList.map((text, index) => (
                            <ListItem button key={index} onClick={() => clickListener(text)}>
                                <ListItemText primary={text} />
                                {hasSubMenu(text.toLowerCase()) && <ChevronRightIcon />}
                            </ListItem>
                        ))
                        
                    }
                </List>
            </div>
        );
    };

    return (
      <div>
        <AppBar position="static" className={classes.appBar} color="transparent">
            <Toolbar className={classes.navToolbar}>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open)}
                >
                    <MenuIcon/>
                </IconButton>        


                <img className={classes.businessLogo} src={audiophileLogo} alt="Audiophile Logo"/>
                    <Grid className={classes.navContainer} container spacing={1} xs={6} justify="space-around" >
                        
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
                        className={classes.cartIcon}
                        >
                        <img  src={cartIcon} alt="Cart Icon"/>
                    </IconButton>    

            </Toolbar>
            <div> <Divider className={`${classes.navDivider} nav-divider`}  light={true}/></div>

        </AppBar>

        <Drawer
            className={classes.drawer}
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            classes={{paper: classes.drawerWidth}}
        >
        
        {menuName && (
            <ListItem button onClick={() => setMenuName(null)}>
                <ListItemText primary="Back to main menu" />
                <ChevronLeftIcon/>
            </ListItem>


        )}
      
        {displayMenuItems()}
            
        </Drawer>
    </div>  
    );
};



export default Navbar;