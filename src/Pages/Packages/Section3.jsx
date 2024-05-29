import React from 'react';
import rightImage from '../../assets/packages/blog.png'

const Section3 = () => {
    return (
        <div className='mt-[70px]'>
            <div className='text-black '>
                <h3 className='font-semibold text-[32px]'>Tips & Article</h3>
                <div className='flex justify-between items-center mt-6'>
                    <p className='text-[#878787] max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, labore.</p>
                    <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Discover more</button>
                </div>
            </div>
            <div className='flex justify-evenly items-center mt-[70px]'>
                <div className='flex flex-col gap-3'>
                    <div className="card w-[445px]  h-[453px] shadow-md">
                        <div className="card-body">
                            <p className='text-[22px] text-black'>Stories | Tips</p>
                            <h2 className="card-title font-medium text-black text-[32px] ">9 Popular Travel Destintion on Sale in 2022
                                -</h2>
                            <p className='text-[#343434]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id quibusdam dignissimos incidunt odio!</p>
                            <div className="card-actions justify-end rounded-full mt-6">
                                <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  w-[445px]  h-[453px]  shadow-md">
                        <div className="card-body">
                            <p className='text-[22px] text-black'>Stories | Tips</p>
                            <h2 className="card-title font-medium text-black text-[32px]">9 Popular Travel Destintion on Sale in 2022
                                -</h2>
                            <p className='text-[#343434]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id quibusdam dignissimos incidunt odio!</p>
                            <div className="card-actions justify-end rounded-full mt-6">
                                <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card  col-span-1 bg-white  rounded-t-lg rounded-b-none shadow-xl">
                    <figure><img src={rightImage} alt="Blog" /></figure>
                    <div className="card-body space-y-2">
                        <p className='text-[22px] text-black'>Stories | Tips</p>
                        <h2 className="card-title font-medium text-black text-[32px]">Travel Stories For Now and the Future</h2>
                        <p className='text-[#343434]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id quibusdam dignissimos incidunt odio!</p>
                        <div className="card-actions justify-end rounded-full mt-6">
                            <button className="btn btn-neutral bg-[#000000] text-white rounded-[30px]">Read more</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section3;