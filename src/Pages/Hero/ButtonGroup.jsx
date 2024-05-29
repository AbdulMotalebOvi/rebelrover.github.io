import React, { useState } from 'react';
import locationImg from '../../assets/logo/map-pin-line.svg'
import people from '../../assets/logo/people.svg'
import search from '../../assets/logo/search-line.svg'

const ButtonGroup = () => {

    return (
        <div className=' join '>
            <form className='join join-vertical lg:join-horizontal'>

                <div className='flex items-center  relative join-item '>
                    <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                        <img height='15' width='15' src={locationImg} alt='' />
                    </span>
                    <input
                        type='text'
                        className='w-full  border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm text-black placeholder-black  rounded-l-full shadow-lg dark:bg-white focus:bg-white border-transparent '
                        placeholder='From'
                    />
                </div>
                <div className='flex items-center relative'>
                    <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                        <img height='15' width='15' src={locationImg} alt='' />
                    </span>
                    <input
                        // ref={locationRef}
                        type='text'
                        name='where'
                        className='capitalize w-full  border-solid outline-none border-4 border-gray-400  p-4 pr-12 text-sm placeholder-black shadow-lg dark:bg-white focus:bg-white  text-black border-transparent '
                        placeholder='To'
                    />
                </div>
                <div className='flex items-center relative'>
                    <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>
                        <img height='15' width='15' src={people} alt='' />
                    </span>
                    <input
                        type='number'
                        name='people'
                        className='w-full  border-solid outline-none border-4 border-gray-400  p-4 pr-8 text-sm placeholder-black shadow-lg dark:bg-white focus:bg-white text-black border-transparent '
                        placeholder=' People'
                    />
                </div>

            </form>
            <div className='w-full  lg:w-auto flex items-center justify-center lg:justify-start mt-4 lg:mt-0'>
                <button

                    // onClick={() => handlerToSubmit()}
                    className='bg-orange-300  rounded-r-full p-5 w-[60px]'
                >
                    <img height='40' width='40' src={search} alt='' />
                </button>
            </div>
        </div>
    );
};

export default ButtonGroup;