import React from 'react';
import { Link } from 'react-router-dom';

import Example1 from '../images/example-card-eva.png';
import Example2 from '../images/example-card-fma.png';
import Example3 from '../images/example-card-soul.png';
import Clip from '../images/clip-slash-pink.svg';

import styles from './AboutSectionHome.module.scss';

const AboutSectionHome: React.FC<{}> = () => {

    return (
        <section className={styles.about}>
                
            <h2 className={styles.about_title}>Features</h2>

            <p>WeebDepo is a streamlined, efficient, and rapid anime recommendation system that aims to provide a smooth user experience in recommending exciting animes based on the user's preferences and interests.</p>

            <div className={styles.about_example_cards}>
                <div className={styles.card_1}>
                    <img 
                        src={Example1}
                        alt="example of card for the anime Neon Genesis Evangelion"
                        loading="lazy"
                    />
                </div>

                <div className={styles.card_2}>
                    <img 
                        src={Example2}
                        alt="example of card for the anime Fullmetal Alchemist: Brotherhood"
                        loading="lazy"
                    />
                </div>

                <div className={styles.card_3}>
                    <img 
                        src={Example3}
                        alt="example of card for the anime Soul Eater"
                        loading="lazy"
                    />
                </div>
            </div>

            <p>Popularity and genre filters are provided, along with a search bar where users can directly use the anime name to search for the desired anime <Link to="/search">search engine.</Link> For suitable animes tailored to your preferences. Click our  <Link to="/survey">Algorithm tab</Link> or scroll down to the featured section for curated results.</p>

            <img 
                className={styles.bottom_clip}
                src={Clip}
                alt=""
                aria-hidden="true"
            />

        </section>
    )
};

export default AboutSectionHome;
