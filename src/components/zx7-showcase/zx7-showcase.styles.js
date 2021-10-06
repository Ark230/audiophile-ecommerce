
import zx7Desktop from '../../assets/img/home/desktop/image-speaker-zx7.jpg'
import zx7Tablet from '../../assets/img/home/tablet/image-speaker-zx7.jpg'
import zx7Mobile from '../../assets/img/home/mobile/image-speaker-zx7.jpg'
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    showcaseContainer:{
        position: 'relative',
        background:'gray',
        marginTop: '6rem',
        background: `url(${zx7Desktop})`,
        borderRadius: '.8rem',
        [theme.breakpoints.only('xs')]:{
            background: `url(${zx7Mobile})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50rem'
        },
        [theme.breakpoints.only('sm')]:{
            background: `url(${zx7Tablet})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '38rem'
        },
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '34rem'
    },
    descriptionShowCasePosition:{
        position: 'absolute',
        left: '8%',
        top: '24%',
        '& > [class*=descriptionContainer]':{
            '& > [class*=productTitle]':{
                color: '#000000',
                fontSize: '3.5rem',
                lineHeight: '4.75rem',
                letterSpacing: '.25rem'
            }, '& > [class*=descriptionButton]':{
                [theme.breakpoints.only('xs')]:{
                    width: '20rem',
                    fontSize: '1.625rem',
                    lineHeight: '2.25rem'
                }
            }

            
        }
    }


}));
