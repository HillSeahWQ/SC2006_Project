import React from 'react';

import styles from './CardGridOffline.module.scss';

const CardGridOffline: React.FC<{}> = () => {

    return (
        <div className={styles.offline}>
            <div className={styles.background_div}></div>

            <h1>Offline - 404</h1>

            <h2>This search requires a connection</h2>

            <ul>
                <li>Check your connection and search again</li>
                <li>If you have no connection available but have visited other pages, they should be available offline</li>
            </ul>

        </div>
    )
};

export default CardGridOffline;