import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/anireka.svg';
import Clip from '../images/clip-slash-blue.svg';

import styles from './HeaderHome.module.scss';

const HeaderHome: React.FC = () => {

    return (
        <header className={styles.header}>
            <img
                    src={Logo}
                    className={styles.logo}
                    alt=""
                    aria-hidden="true"
                />
            <div className={styles.header_content}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>WeebDepo</h1>
                <h2>Sophisticated Recommendations, <br/>Animes to go! </h2>

                <div className={styles.button_container}>
                    <button><Link to="/search">Browse</Link></button>
                    <button><a href="#featured">Featured</a></button>
                </div>
            </div>



            <div className={styles.bottom_border}>




            </div>

        </header>
    )
};

export default HeaderHome;
