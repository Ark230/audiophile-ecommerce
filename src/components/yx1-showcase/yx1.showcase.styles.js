import { makeStyles } from "@material-ui/core";
import yx1Desktop from '../../assets/img/home/desktop/image-earphones-yx1.jpg';
import yx1Tablet from '../../assets/img/home/tablet/image-earphones-yx1.jpg';
import yx1Mobile from '../../assets/img/home/mobile/image-earphones-yx1.jpg';

export const useStyles = makeStyles((theme) => ({
    showcaseContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '6rem',
        width:'100%',
        [theme.breakpoints.only('xs')]:{
            flexDirection: 'column'

        }
    },
    descriptionShowCasePosition:{
        width: '50%',
        background: '#F1F1F1',
        borderRadius: '.8rem',
        [theme.breakpoints.only('xs')]:{
            width: '100%',
            height: '25rem'
        },
        '& > [class*=descriptionContainer]':{
            padding: '9rem 0rem 9rem 9rem',
            [theme.breakpoints.only('xs')]:{
                margin: '0 auto',
                width: 'fit-content',
                height: 'fit-content',
                padding: '4rem 4rem'
            },
            [theme.breakpoints.only('sm')]:{
                padding: '8rem 4rem',
                width: 'revert'
            },
            '& > [class*=productTitle]':{
                color: '#000000',
                fontSize: '3.5rem',
                lineHeight: '4.75rem',
                letterSpacing: '.25rem'
            },
            '& > [class*=descriptionButton]':{
                width: '20rem',
                fontSize: '1.625rem',
                lineHeight: '2.25rem'
            }

        },
    },
    productShowCaseImage:{
        background: `url(${yx1Desktop})`,
        borderRadius: '.8rem',
        height:'37rem', 
        width: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginRight: '2rem',
        [theme.breakpoints.only('xs')]:{
            width: '100%',
            height: '25rem',
            marginBottom: '3rem',
            background: `url(${yx1Mobile})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },
        [theme.breakpoints.only('sm')]:{
            background: `url(${yx1Tablet})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },
    }
}));