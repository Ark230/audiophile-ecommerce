import {makeStyles} from '@material-ui/core';


export const useStyles = makeStyles( theme => ({
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
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'space-between'
        },
        [theme.breakpoints.only('xs')]:{
            paddingRight:'0'
        }
    },
    navItem:{
        fontFamily: 'Manrope',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.3rem',
        color:'#ffff',
        cursor:'pointer',
        '&:hover':{
            color:'#D87D4A'
        }
    },
    navDivider: {
        background: '#ffffff',
        opacity: '0.2',
        [theme.breakpoints.up('md')]:{
            marginLeft:'7.5%',
            marginRight:'8.3%'
        },
        [theme.breakpoints.only('sm')]:{
            marginLeft:'1.1%',
            marginRight:'4.6%'
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
    cartIcon:{
        [theme.breakpoints.only('xs')]:{
            padding:'0'
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