import React from 'react';

import styles from './CardGridEmpty.module.scss';

const CardGridEmpty: React.FC<{}> = () => {

    return (
        <main className={styles.message}>
            <div className={styles.message_box}>
                <h1>No Results Found</h1>
                <p>Try narrowing your search down by either checking for spelling errors or selecting less genres/less conflicting genre tags together.</p>
            </div>
        </main>
    )
};

export default CardGridEmpty;