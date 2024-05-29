import React from 'react';
import Hero from '../Hero/Hero';
import Places from '../Places/Places';
import Chosses from '../ChooseUs/Chosses';
import Patners from '../Patner/Patners';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div className='bg-white  dark:bg-white text-black'>
            <Hero />
            <div className='px-[100px]'>
                <Places classname />
            </div>
            <Chosses />
            <Patners />
            <Testimonial />

        </div>
    );
};

export default Home;