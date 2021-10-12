import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    footerNavbar:{
        display:'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column'
        }
    },
    footerNavbarItems:{
        display: 'flex',
        justifyContent:'space-between',
        color: '#FFFFFF',
        listStyle: 'none',
        '& > li':{
            cursor: 'pointer',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            lineHeight: '1rem',
            letterSpacing: '.3rem',
            '&:hover':{
                color:'#D87D4A'
            }
        },
        '& > li:not(:last-child)':{
            marginRight: '1rem'
        },
        [theme.breakpoints.only('xs')]:{
            flexDirection:'column',
            padding: '0',
            textAlign: 'center',
            margin: '4rem 0',
            '& > li:not(:last-child)':{
                marginBottom: '2rem'
            },
        },    
        [theme.breakpoints.only('sm')]:{
            padding: '0',
            justifyContent:'flex-start',
            marginTop: '4rem'
        }
    },
    businessLogo:{
        width:'13rem',
        [theme.breakpoints.only('xs')]:{
            margin: '0 auto'
        }
    }

}));