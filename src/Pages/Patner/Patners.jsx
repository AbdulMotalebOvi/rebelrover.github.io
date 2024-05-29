import React from 'react';
import image1 from '../../assets/Images/Brand/bigui.png'
import image2 from '../../assets/Images/Brand/Booking.png'
import image3 from '../../assets/Images/Brand/Jakmaen.png'
import image4 from '../../assets/Images/Brand/Katana.png'
import image5 from '../../assets/Images/Brand/travava.png'

const Patners = () => {
    return (
        <>
            <div className='space-y-3 text-center text-balance text-black py-[60px]'>
                <h1 className='text-6xl font-bold '>Our tour partner</h1>
                <p className='max-w-sm m-auto '>There are many variation of passage of lorem ipsum available but the majority have suffered alteration </p>
            </div>
            <div className='px-[188px]'>
                <div className='flex justify-between items-center '>
                    <img src={image1} alt="" srcset="" />
                    <img src={image2} alt="" srcset="" />
                    <img src={image3} alt="" srcset="" />
                    <img src={image4} alt="" srcset="" />
                    <img src={image5} alt="" srcset="" />
                </div>
            </div>
        </>
    );
};

export default Patners;