import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import HeaderHome from '../components/HeaderHome';
import AboutSectionHome from '../components/AboutSectionHome';
import Footer from '../components/Footer';

// import styles from './home.module.scss';

// @author: Bhat Sachin <SACHIN008@e.ntu.edu.sg>

const Home: React.FC<{}> = () => {

    const FeaturedSectionHome = React.useMemo(() => React.lazy(() => import('../components/FeaturedSectionHome')), []);

    return (
        <main>

            <Helmet>
                <html lang="en" />
                <meta name="description" content="Search for anime and get fresh recommendations" />
                <title>WeebDepo | Anime Search and Recommendations System</title>
            </Helmet>

            <Navbar />

            <HeaderHome />

            <AboutSectionHome />

            <Suspense fallback={<section></section>}>
                <FeaturedSectionHome />
            </Suspense>

            <Footer />

        </main>
    )
};

export default Home;
