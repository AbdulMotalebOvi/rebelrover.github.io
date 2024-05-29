import React from 'react';
import bannerthree from '../../assets/AboutImages/bannerthree.png';
import award from '../../assets/AboutImages/logo/award.png';
import people from '../../assets/AboutImages/logo/people.png';
import gallery from '../../assets/AboutImages/logo/gallery.png';
import peoples from '../../assets/AboutImages/logo/Group.png';

const Sectionthree = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerthree})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '500px',
            padding: '200px 0px'
        }}>
            <div className='grid  grid-cols-1 md:grid-cols-4 gap-6 text-center text-balance px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='flex  items-center justify-center h-full'>
                    <img src={peoples} alt="" className='mb-4' />
                    <div className='ml-4 text-white'>
                        <p className=' text-[24px]'>126<div className="badge ml-2 bg-white text-black">+99</div></p>
                        <p className='text-[#E7E7E7] text-xs'>Satisfied Client</p>
                    </div>
                </div>
                <div className='flex  items-center justify-center h-full'>
                    <img src={people} alt="" className='mb-4' />
                    <div className='ml-4 text-white'>
                        <p className=' text-[24px]'>230<div className="badge bg-white text-black ml-2">+99</div></p>
                        <p className='text-[#E7E7E7] text-xs'>New Traveller</p>
                    </div>
                </div>
                <div className='flex  items-center justify-center h-full'>
                    <img src={gallery} alt="" className='mb-4' />
                    <div className='ml-4 text-white'>
                        <p>230<div className="badge bg-white text-black ml-2">+99</div></p>
                        <p className='text-[#E7E7E7] text-xs'>Destination</p>
                    </div>
                </div>
                <div className='flex  items-center justify-center h-full'>
                    <img src={award} alt="" className='mb-4' />
                    <div className='ml-4 text-white'>
                        <p>230<div className="badge bg-white text-black ml-2">+99</div></p>
                        <p className='text-[#E7E7E7] text-xs'>Award</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionthree;
