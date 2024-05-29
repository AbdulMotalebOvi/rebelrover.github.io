import React from 'react';
import hero from '../../assets/Images/heroImag.png'
import ButtonGroup from './ButtonGroup';

const Hero = () => {
    return (
        <div className='flex items-center' style={{
            backgroundImage: `url(${hero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '860px',


        }}>
            <div className="text-white text-balance px-[100px] ">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-6xl font-bold">Make in your journey.</h1>
                    <p className="mb-5 text-[#CFCFCF] text-sm">Explore the world with what you love beautiful natural beauty.</p>
                    <div>
                        <ButtonGroup />
                    </div>
                    <p className='mt-5 text-[#CFCFCF] text-sm'>Popular Place : Bali, Istanbul, Rome, Paris.</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;