import React from 'react';

import Logo from '../images/anireka.svg';

import styles from './PageLoading.module.scss';

const PageLoading: React.FC<{}> = () => {

    return (
        <div className={styles.loading}>
            
            <div className={styles.loading_display}>
                <img 
                    src={Logo}
                    alt=""
                    aria-hidden="true"
                />
                <div>Loading</div>
            </div>

        </div>
    )
};

export default PageLoading;