import React, { useEffect, useState } from 'react';
import { recommendationsQuery } from '../api/anilist';

import CardMini from './CardMini';

import Swoop from '../images/swoop_card_white.svg';

import styles from './RecommendationsTab.module.scss';

interface Props {
    sourceID: number;
}

const RecommendationsTab: React.FC<Props> = ({ sourceID }) => {

    const [ recommendations, setRecommendations ] = useState<any>(null);

    useEffect(() => {
        recommendationsQuery(sourceID, 1)
            .then(data => {
                setRecommendations(data.data.Media);
            });
    }, [sourceID]);

    const recommendationCards = () => {
        if (!recommendations) return null;

        if (!recommendations.recommendations.edges.length) return <div className={styles.missing}>No recommendations found</div>;

        return recommendations.recommendations.edges.map((el: any, index: number) => (
            el.node.mediaRecommendation ? (
                <CardMini 
                    key={`reco-card-${index}`}
                    anime={el.node.mediaRecommendation} 
                    isRecommendation={true} 
                />
            ) : null
        ));
    };

    return (
        <div className={styles.tab}>

            <img 
                src={Swoop}
                alt=""
                aria-hidden="true"
            />

            <h3>Recommendations</h3>

            <div className={styles.recommendations}>
                {recommendationCards()}
            </div>
        </div>
    )
};

export default RecommendationsTab;