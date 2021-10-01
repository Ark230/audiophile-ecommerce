import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    containerHeroPosition:{ 
        margin: '6% 9%',
        [theme.breakpoints.only('xs')]:{
            width: '32rem',
            height: '29rem',
            transform: 'translate(-60%, -40%)'
        },
        [theme.breakpoints.down('sm')]:{
            position: 'absolute',
            margin: '0',
            textAlign: 'center',
            left: '50%',
            top: '50%'
        },
        [theme.breakpoints.only('sm')]:{
            transform: 'translate(-48%, -50%)'
        },
        '& > [class*=descriptionContainer]':{
            '& > .descriptionButton':{
                [theme.breakpoints.down('sm')]:{
                    margin:'2rem auto'
                }
            }
        }

    }
}));


