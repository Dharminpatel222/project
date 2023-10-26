import React from 'react'
import Hero from '../Components/Hero';
import Populer from '../Components/Populer';
import About from '../Components/About';
import Menu from '../Components/Menu';
import Chefs from '../Components/Chefs';
import Regervation from '../Components/Regervation';
import Reviewpart from '../Components/Reviewpart';
import Recentnews from '../Components/Recentnews';

const HomePage = () => {
    return (
        <>
            <Hero />
            <div className="mt-5">
                <Populer />
            </div>
            <About />
            <Menu />
            <Chefs />
            <Regervation />
            <Reviewpart />
            <Recentnews />
        </>
    )
}
export default HomePage;