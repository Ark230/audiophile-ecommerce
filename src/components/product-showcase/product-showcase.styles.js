import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles( theme => ({
    showcaseContainer:{
        height:'56rem',
        marginTop:'10rem',
        background: '#D87D4A',
        borderRadius: '.8rem',
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            height: '72rem'
        },
        [theme.breakpoints.only('md')]:{
            minWidth: '82rem'
        }
    },
    speakerShowcase:{
        position: 'absolute',
        height: '85%',
        marginTop: '9.5rem',
        marginLeft: '12.5rem',
        zIndex: '10',
        [theme.breakpoints.down('sm')]:{
            height: '34%',
            margin: '0',
            transform:'translate(50%, -30%)',
            bottom:'50%',
            right:'50%'
        },
        [theme.breakpoints.only('md')]:{
            marginLeft: '7.35rem'
        }
    },
    circlePattern:{
        position:'absolute',
        [theme.breakpoints.down('sm')]:{
            width: '68rem',
            transform: 'translate(51%, 24%)',
            bottom: '50%',
            right: '50%'
        },
        [theme.breakpoints.only('md')]:{
            width: '100rem',
            transform: 'translate(-23%, -6%)'
        },
        [theme.breakpoints.up('lg')]:{
            width: '100rem', 
            transform: 'translate(-18.5%, -6%)'
        },
        zIndex: '5'
    },
    productShowCasePosition:{
        marginLeft: '66rem',
        marginTop: '11rem',
        '& > [class*=descriptionContainer]':{
            [theme.breakpoints.down('sm')]:{
               position: 'absolute',
               transform: 'translate(51%, 97%)',
               bottom:'50%',
               right: '50%'
            },
            '& > *':{
                zIndex: '100'
            },
            '& > .descriptionButton':{
                width: '40%',
                [theme.breakpoints.down('sm')]:{
                    margin: '2.5rem 12rem'
                }
            },
            '& > [class*=productTitle]':{
                wordSpacing: '15rem'
            },
            '& > [class*=descriptionText]':{
                [theme.breakpoints.down('md')]:{
                    width: '30.9rem'
                }
            }
        },
        [theme.breakpoints.down('xs')]:{
            marginTop: '42rem',
            marginLeft: '1rem'
        },
        [theme.breakpoints.down('sm')]:{
            textAlign: 'center',
            marginLeft:'25rem',
            marginTop: '35rem'
        },
        [theme.breakpoints.up('md')]:{
            position: 'absolute',
            top: '21%',
            left:'63%',
            margin: '0'
        }
    }
    
}));
