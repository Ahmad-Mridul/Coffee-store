import React from 'react';
import HomeHero from '../components/HomeHero';
import UnderHero from '../components/UnderHero';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
    return (
        <div>
            <HomeHero />
            <UnderHero></UnderHero>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;