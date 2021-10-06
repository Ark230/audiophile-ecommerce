import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles( theme => ({
    showcaseContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10rem auto 0 auto',
        '& > div': {
            [theme.breakpoints.only('xs')]:{
                width: '100%'
            },
           '&:not(:last-child)':{
               marginRight: '2rem',
               [theme.breakpoints.only('xs')]:{
                   marginRight: '0'
               }
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
        [theme.breakpoints.only('sm')]:{
            width: '30.5%'
        },
        '& > img':{
            width:'26rem',
            height:'25rem',
            display: 'block',
            margin: '-10rem auto',
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

}));
