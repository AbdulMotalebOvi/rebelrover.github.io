import React from 'react';
import Section1 from './Section1';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import Sectionfour from './Sectionfour';

const AboutlandingPage = () => {
    return (
        <div >
            <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='pt-[100px]'>
                    <Section1 />
                </div>
                <Sectiontwo />
            </div>
            <div>
                <Sectionthree />
                <Sectionfour />
            </div>
        </div>
    );
};

export default AboutlandingPage;