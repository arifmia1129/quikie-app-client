import React from 'react';
import HeroCards from './shared/HeroCards';
import Details from './StockDetails/Details';

const Home = () => {
    return (
        <div>
            <HeroCards />
            <Details />
        </div>
    );
};

export default Home;