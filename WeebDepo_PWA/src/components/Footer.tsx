import React from 'react';
import { Link } from 'react-router-dom';

import Swoop from '../images/swoop_card.svg';

import styles from './Footer.module.scss';

const Footer: React.FC<{}> = () => {

    return (
        <footer className={styles.footer}>
            <img src={Swoop} alt="" aria-hidden="true"/>
            <div className={styles.footer_nav}>
                <span>Navigation</span>
                <Link to="/">Home</Link>
                <Link to="/survey">Algorithm</Link>
                <Link to="/search">Search</Link>                
            </div>
            <span>WeebDepo ©{new Date().getFullYear()} by EntertainmentAccomplished</span>
        </footer>
    )
};

export default Footer;
