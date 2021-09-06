import React, { useState } from 'react';
import './Navbar.styles.scss';
import {AppBar, Grid, makeStyles, Toolbar, 
        List, ListItem, Link, IconButton, Drawer, useTheme, Divider, ListItemText, Typography,
        } from '@material-ui/core'
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import cartIcon from '../../assets/img/cart/cart-icon.svg';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from 'clsx';


// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

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
        // [theme.breakpoints.down('md')]:{
        //     marginLeft:'9.5rem',
        //     marginRight:'9.5rem'
        // }
        //tablet 
        [theme.breakpoints.between('sm','md')]:{
            marginLeft: '4.5rem',
            marginRight: '4.8rem'
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
        display: 'none'
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
    const theme = useTheme();

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

    const list = () => {
        

        let arr = menuName ? subMenuObj[menuName] : mainMenuListArr;
        console.log(arr, menuName);

        if(menuName){
            arr = arr.map(item => {
                if(typeof(item) === 'object'){
                    return item.name;
                }
            });
            
        }

        const clickListener = (text) => {
            if(!menuName){ 
                return setMenuName(text.toLowerCase());
            }else{
                return alert(`${text} clicked`);
            }
        }

        return(
            <div className={classes.list} role="presentation">
               { !menuName && <Typography variant="h6" align="center">Categories</Typography>}
                <Divider/>
                <List>
                    {
                      
                        arr.map((text, index) => (
                            
                            <ListItem button key={text} onClick={() => clickListener(text)}>
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
            <Toolbar className="nav-toolbar">

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>        


                <img src={audiophileLogo} alt="Audiophile Logo"/>
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
            <div> <Divider className={`${classes.navDivider} nav-divider`} variant="middle" light={true}/></div>

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
      
        {list()}
            
        </Drawer>
    </div>  
    );
};



export default Navbar;