import React from 'react';
import SignlePlce from './SignlePlce';

const Places = () => {
    return (
        <div className='my-10 h-[650px]'>
            <div className='text-center text-balance text-[#020202] '>
                <h1 className='text-6xl font-bold'>Explore new worlds with
                    exotic natural scenery</h1>
                <p className='text-[#878787]'>Explore the world with what you love beautiful natural beauty.</p>
            </div>
            <div className='py-10'>
                <SignlePlce />
            </div>
        </div>
    );
};

export default Places;