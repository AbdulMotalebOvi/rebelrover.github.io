import React from 'react';
import banner3 from '../../assets/Images/bannermap.png'

const Subscribe = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
            paddingTop: '100px'
        }}

        >
            <div className='text-center text-balance '>
                <h1 className='text-6xl font-bold text-white'>Subcribe to get special price</h1>
                <p className='text-[#DFDFDF] mt-4  mx-auto'>Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter.</p>
            </div>
            <div className='max-w-xl mx-auto mt-[100px]'>
                <form className="">
                    <div className="relative max-w-lg">
                        <label className="sr-only" htmlFor="email"> Email </label>

                        <input
                            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:text-black hover:bg-white"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;