import { makeStyles } from '@material-ui/core';
import desktopImage from '../../assets/img/home/desktop/image-hero.jpg';
import tabletDesktopImage from '../../assets/img/home/tablet/image-header.jpg';
import mobileDesktopImage from '../../assets/img/home/mobile/image-header.jpg';

export const useStyles = makeStyles((theme) => ({
    heroSectionBg:{
        height: '100vh',
        backgroundImage: `url(${desktopImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.between('md', 'lg')]:{
            backgroundImage: `url(${desktopImage})`,
            backgroundPosition: '55%'
        },
        [theme.breakpoints.only('sm')]:{
            backgroundImage: `url(${tabletDesktopImage})`,
            backgroundPosition: 'center'
         },
        [theme.breakpoints.only('xs')]:{
            backgroundImage: `url(${mobileDesktopImage})`
        }
    },
    mainSection:{
        padding: '10rem 14.5rem',
        [theme.breakpoints.only('md')]:{
            padding: '10rem 9rem'
        },
        [theme.breakpoints.down('sm')]:{
            padding: '10rem 2.5rem'
        }
    }

}));