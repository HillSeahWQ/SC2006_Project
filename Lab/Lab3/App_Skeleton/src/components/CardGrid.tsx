import React from 'react';
import { AnimeList } from '../application/customTypes';

import CardMini from './CardMini';
import CardGridEmpty from './CardGridEmpty';

import styles from './CardGrid.module.scss';

interface Props {
    animeList: AnimeList | null;
}

const CardGrid: React.FC<Props> = ({ animeList }) => {

    const generateGrid = () => {
        if (!animeList) return null;

        return animeList.media.map((el, index) => (
            <CardMini 
                key={`mini-card-${index}`}
                anime={el}
                isRecommendation={false}
            />
        ))
    };

    return (
        animeList && animeList.media.length ? (
            <div className={styles.card_grid}>
                {generateGrid()}
            </div>
        ) : <CardGridEmpty />
    )
};

export default CardGrid;