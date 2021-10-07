import { makeStyles } from '@material-ui/core';
import BestGearDesktop from '../../assets/img/shared/desktop/image-best-gear.jpg';
import BestGearTablet from '../../assets/img/shared/tablet/image-best-gear.jpg';
import BestGearMobile from '../../assets/img/shared/mobile/image-best-gear.jpg';

export const useStyles = makeStyles((theme) => ({
        footerContainer:{
            padding: '10rem 14.5rem',
            marginTop: '-3rem',
            [theme.breakpoints.down('sm')]:{
                padding: '5rem 2.5rem'
            },
            [theme.breakpoints.only('md')]:{
                padding: '5rem 9rem'
            }

        },
        footerPosition:{
            display: 'flex',
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column'
            },
            justifyContent: 'space-between'
        },
        footerDescription:{
            width:'50%',
            margin:'auto auto',
            [theme.breakpoints.only('xs')]:{
                marginLeft: '0',
                padding:'0 0',
                width: 'revert'
                
            },
            [theme.breakpoints.only('sm')]:{
                width:'revert',
                marginTop: '5rem',
                marginLeft: '4rem',
                order: '1',
                padding:'0rem 5rem',
                textAlign:'center'
            },
         
        },

        footerDescriptionHeader:{
            width: '90%',
            fontSize: '4rem',
            lineHeight: '4.4rem',
            letterSpacing: '1.4px',
            marginBottom: '1rem',
            marginTop:'0',
            textTransform: 'uppercase',
            [theme.breakpoints.only('xs')]:{
               margin: '3rem 3rem',
               textAlign: 'center'
            },
            [theme.breakpoints.only('sm')]:{
                width: 'revert'
            }
        },
        footerDescriptionDetail:{
            width: '75%',
            fontSize: '1.5rem',
            lineHeight: '2.5rem',
            fontWeight: '200',
            [theme.breakpoints.only('xs')]:{
                textAlign: 'center'
             },
            [theme.breakpoints.down('sm')]:{
               width: 'revert'
            }
        },
        descriptionSpan:{
            color: '#D87D4A'

        },
        footerImage: {
            content: `url(${BestGearDesktop})`,
            borderRadius: '.8rem',
            height: 'fit-content',
            width: '49%',
            [theme.breakpoints.only('xs')]:{
                content: `url(${BestGearMobile})`
            },
            [theme.breakpoints.down('sm')]:{
                content: `url(${BestGearTablet})`,
                width: '100%',
                order: '-1'
            }

        }


}));