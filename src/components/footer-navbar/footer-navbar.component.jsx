
import React from 'react';
import audiophileLogo from '../../assets/img/shared/desktop/logo.svg';
import { useStyles } from './footer-navbar.styles';

const FooterNavbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.footerNavbar}>
            <img className={classes.businessLogo} src={audiophileLogo} alt="Audiophile Logo"/>
            <ul className={classes.footerNavbarItems}>
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKER</li>
                <li>EARPHONES</li>
            </ul>
        </nav>
    );
};

export default FooterNavbar