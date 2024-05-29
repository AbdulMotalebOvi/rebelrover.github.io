import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const PackageLandingPage = () => {
    return (
        <div>

            <div className='my-[170px] mx-[70px] '>
                <div className='text-black '>
                    <h3 className='font-semibold text-[32px]'>Popular Destination</h3>
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-[#878787] max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, labore.</p>
                        <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Discover more</button>
                    </div>
                </div>
            </div>
            <div className='my-[100px] mx-[70px] '>
                <Section1 />
            </div>
            <Section2 />
            <div className='my-[100px] mx-[70px] '>
                <Section3 />
            </div>

        </div>

    );
};

export default PackageLandingPage;