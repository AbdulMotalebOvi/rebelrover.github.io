import React from 'react';
import leftone from '../../assets/AboutImages/austra.png'
import dubai from '../../assets/AboutImages/dubai.png'
import paris from '../../assets/AboutImages/onesidebig.png'
import italy from '../../assets/AboutImages/scenaries.png'
import { Link } from 'react-router-dom';



const images = [
    {
        src: leftone,
        label: 'Bali',
        span: 'col-span-1 row-span-2',
        height: 'h-[676px]'
    },
    {
        src: dubai,
        label: 'Dubai',
        height: 'h-[328px]'
    },
    {
        src: paris,
        label: 'Paris',
        height: 'h-[328px]'
    },
    {
        src: italy,
        label: 'Italy',
        height: 'h-[328px]'
    },
];

const Sectionfour = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-[328px] lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#878787] uppercase rounded-full bg-teal-accent-400">
                        Gallery
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Unforgettable moment</span>
                    </span>
                </h2>

            </div>
            <div className="flex  gap-3">
                <div className="relative w-[600px] h-[670px]">
                    <img
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                        src={images[0].src}
                        alt={images[0].label}
                    />
                    <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                        {images[0].label}
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-[328px]">
                        <img
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                            src={images[3].src}
                            alt={images[3].label}
                        />
                        <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                            {images[3].label}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative w-full h-[328px]">
                            <img
                                className="object-cover w-full h-full rounded-lg shadow-lg"
                                src={images[1].src}
                                alt={images[1].label}
                            />
                            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                {images[1].label}
                            </div>
                        </div>
                        <div className="relative w-full h-[328px]">
                            <img
                                className="object-cover w-full h-full rounded-lg shadow-lg"
                                src={images[2].src}
                                alt={images[2].label}
                            />
                            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                {images[2].label}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sectionfour;