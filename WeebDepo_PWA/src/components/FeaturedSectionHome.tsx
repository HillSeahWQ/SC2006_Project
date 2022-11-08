import React, { useState, useEffect } from 'react';
import { specificListQuery } from '../api/anilist';
import { MediaMini } from '../application/customTypes';
import useWindowDimensions from '../hooks/useWindowDimensions';

import CardMini from './CardMini';

import Wave from '../images/wave.svg';

import styles from './FeaturedSectionHome.module.scss';

const FeaturedSectionHome: React.FC<{}> = () => {

    const { screenWidth } = useWindowDimensions();

    const [ featuredAction, setFeaturedAction ] = useState<Array<MediaMini>>();
    const [ featuredDrama, setFeaturedDrama ] = useState<Array<MediaMini>>();
    const [ featuredPsychological, setFeaturedPsychological ] = useState<Array<MediaMini>>();

    useEffect(() => {
        specificListQuery([113415, 21507, 10087, 128546, 205, 777, 889, 11061, 100298, 16498, 2001, 1292])
            .then(data => {
                setFeaturedAction(data.data.Page.media);
            });

        specificListQuery([128547, 9253, 6114, 107660, 245, 110349, 6746, 20607, 1210, 100388, 101291, 239])
            .then(data => {
                setFeaturedDrama(data.data.Page.media);
            });

        specificListQuery([13601, 13125, 19, 9756, 30, 790, 97986, 98707, 20931, 3002, 43, 323])
            .then(data => {
                setFeaturedPsychological(data.data.Page.media);
            });
    }, []);

    const featuredRows = (featuredAnimes: Array<MediaMini>, genre: string, width: number): JSX.Element => {
        let perChunk: number = width > 768 ? 4 : 3;

        //reducer to split anime list into chunks based on screen width
        const chunkedResults = featuredAnimes.reduce((chunkedArr: any, el: MediaMini, index) => {
            const chunkIndex = Math.floor(index/perChunk);

            if (!chunkedArr[chunkIndex]) {
                chunkedArr[chunkIndex] = [];
            }

            chunkedArr[chunkIndex].push(el);

            return chunkedArr;
        }, []);

        //render each chunk as a row
        return chunkedResults.map((el: Array<MediaMini>, index: number) => (
            <div className={styles.card_row} key={`row-${index}-${genre}`}>
                {el.map((el, index) => (
                    <CardMini 
                        key={`${genre}-card-${index}`}
                        anime={el}
                        isRecommendation={true}
                    />
                ))}
            </div>
        ))
    };

    return (
        <section className={styles.featured} id="featured">
            
            <h2>Featured Anime</h2>

            <div className={styles.featured_sliders}>

                <img 
                    src={Wave}
                    alt=""
                    aria-hidden="true"
                />

                <section>
                    <h3>Action</h3>
                    <div className={styles.slider}>
                        {
                            featuredAction && screenWidth ? (
                                featuredRows(featuredAction, 'action', screenWidth)
                            ) : null
                        }
                    </div>
                </section>
                <section>
                    <h3>Drama</h3>
                    <div className={styles.slider}>
                        {
                            featuredDrama && screenWidth ? (
                                featuredRows(featuredDrama, 'drama', screenWidth)
                            ) : null
                        }
                    </div>
                </section>
                <section>
                    <h3>Psychological</h3>
                    <div className={styles.slider}>
                        {
                            featuredPsychological && screenWidth ? (
                                featuredRows(featuredPsychological, 'psychological', screenWidth)
                            ) : null
                        }
                    </div>
                </section>
            </div>

        </section>
    )
};

export default FeaturedSectionHome;