import React from 'react';
import { useLocation } from 'react-router-dom';

const CommonSection = ({ title, banner }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>

            <div className='flex items-center' style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '860px',
                top: '1px',
                left: '-2px'
            }}>
                <div className='max-w-md m-auto'>
                    <h1 className='text-4xl font-bold text-white'>{title}</h1>
                    <p className='text-white mt-2 flex items-center justify-center'>
                        Home<span className='mx-2'>{pathname}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CommonSection;
