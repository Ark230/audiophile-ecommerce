import React, { useState } from 'react';
import './Navbar.styles.scss';
import {AppBar, Grid, makeStyles, Toolbar, 
        List, ListItem, Link, IconButton, Drawer, Divider, ListItemText, Typography,
        } from '@material-ui/core'
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import cartIcon from '../../assets/img/cart/cart-icon.svg';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from 'clsx';


const useStyles = makeStyles( theme => ({
    mainContainer: {
        display: 'flex',
    },
    navContainer:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    nav:{
        display: 'flex'
    },
    appBar:{
        padding: '2rem 2.5rem',
        boxShadow: 'none'
    },
    businessLogo:{
        
        [theme.breakpoints.down('sm')]:{
            position:'absolute',
            top:'30%',
            left:'7.2%'
        },
        [theme.breakpoints.down('xs')]:{
            position: 'revert'
        }

    },
    navToolbar:{
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]:{
            justifyContent: 'space-between'
        }
    },
    navItem:{
        fontFamily: 'Manrope',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.3rem',
        color:'#ffff'
    },
    navDivider: {
        background: '#ffffff',
        opacity: '0.2',
        [theme.breakpoints.up('lg')]:{
            marginLeft:'11.5rem',
            marginRight:'11.5rem'
        },
        [theme.breakpoints.between('sm')]:{
            marginLeft: '0',
            marginRight: '5%'
        }
    },
    menuButton: {
        transform: 'scale(1.9)',
        padding: '0',
        marginRight: theme.spacing(2),
        color: '#ffffff',
        [theme.breakpoints.up('md')]:{
            display:'none'
        },
        [theme.breakpoints.between('xs','sm')]:{
            display:'block'
        }
    },
    hide:{
        display: 'block'
    },
    drawer:{
        width: '240',
        flexShrink: 0
    },
    drawerPaper:{
        width: '240'
    },
    list:{
        width: '250'
    }

}));

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
                        >
                        <img src={cartIcon} alt="Cart Icon"/>
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