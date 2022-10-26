import React, { useRef, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MediaMini } from '../application/customTypes';
import useOnScreen from '../hooks/useOnScreen';

import Swoop from '../images/swoop_card.svg';
import Rating from '../images/rating.svg';

import styles from './CardMini.module.scss';

interface Props {
    anime: MediaMini;
    isRecommendation: boolean;
}

const CardMini: React.FC<Props> = ({ anime, isRecommendation }) => {

    const history = useHistory();

    let blurTimer: any; //for preventing blur firing on child elements of component

    const ref = useRef<HTMLDivElement>(null);
    const inView = useOnScreen(ref);

    const [ showCardoptions, setShowCardOptions ] = useState<boolean>(false);
    const [ showRecommendations, setShowReccomendations ] = useState<boolean>(false);

    const episodeStatus = (): string => {
        if (anime.format === 'MOVIE') return 'Movie';
        if (anime.format === 'MUSIC') return 'Music Video';

        if (anime.status === 'FINISHED') {
            return `Ep: ${anime.episodes}`;
        } else if (anime.status === 'NOT_YET_RELEASED') {
            return 'Unreleased';
        } else {
            return 'Ongoing';
        }
    };

    const shortenedTitle = (title: string): string => {
        let formattedTitle: string | string[];
        let wordLength: number = 9;

        formattedTitle = title.split(' ');

        if (formattedTitle.length > wordLength) {
            for (let i = formattedTitle.length; i > wordLength; i--) {
                formattedTitle.pop();
            }
            return formattedTitle.join(' ') + '...';
        } else {
            return title;
        }
    };

    const RecommendationsTab = React.lazy(() => import('./RecommendationsTab'));

    return (
        <>
            <div 
                className={styles.card}
                tabIndex={0}
                ref={ref}
                style={{
                    transform: inView || isRecommendation ? 'translate(0)' : 'translateY(8rem)',
                    opacity: inView || isRecommendation ? 1 : 0
                }}
                onClick={() => {
                    if (!isRecommendation) {
                        setShowCardOptions(true)
                    } else {
                        history.push(`/entry/${anime.id}`)
                    }
                }}
                onFocus={() => {
                    clearTimeout(blurTimer)
                }}
                onBlur={() => {
                    if (showCardoptions) {
                        blurTimer = setTimeout(() => {
                            setShowCardOptions(false)
                        });
                    }
                }}
            >
                
                <div className={styles.section_top}>

                    <div className={styles.info_top}>
                        <div>{episodeStatus()}</div>
                        <div className={styles.info_score}>
                            <img src={Rating} alt="" aria-hidden="true" />
                            <div>{anime.averageScore || 'N/A'}</div>
                        </div>
                    </div>

                    <img 
                        src={Swoop}
                        alt=""
                        aria-hidden="true"
                        className={styles.bg_top}
                    />

                </div>

                <div className={styles.coverimage}>
                    <img 
                        src={anime.coverImage.large || anime.coverImage.medium}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                    />
                </div>

                <div className={styles.card_title}>
                    {anime.title.english?.length ? shortenedTitle(anime.title.english) : anime.title.romaji}
                </div>

                <div 
                    className={styles.section_bottom}
                    style={{
                        height: showCardoptions ? '100%' : '30%'
                    }}
                >

                    {
                        showCardoptions ? (
                            <div 
                                className={styles.options_bottom}
                            >
                                <button>
                                    <Link to={`/entry/${anime.id}`}>More Info</Link>
                                </button>

                                <button onClick={() => setShowReccomendations(true)}>
                                    Related
                                </button>
                            </div>
                        ) : (
                            <div className={styles.info_bottom}>
                                {anime.title.native}
                            </div>
                        )
                    }

                    <img 
                        src={Swoop}
                        alt=""
                        aria-hidden="true"
                        className={styles.bg_bottom}
                    />

                </div>

            </div>
            
            {
                showRecommendations ? (
                    <>
                        <Suspense fallback={<div className={styles.reco_placeholder}></div>}>
                            <RecommendationsTab 
                                sourceID={anime.id}
                            />
                        </Suspense>

                        <div 
                            className={styles.reco_blur}
                            onClick={() => setShowReccomendations(false)}
                        ></div>
                    </>
                ) : null
            }
        </>
    )
};

export default CardMini;