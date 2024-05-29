import React from 'react';
import leftImage from '../../assets/AboutImages/section2.png'
import quote from '../../assets/AboutImages/logo/quote.png'

const Sectiontwo = () => {
    return (
        <div className='flex items-center mt-[170px]'>
            <img className='w-[500px] h-[500px]' src={leftImage} alt="" srcset="" />
            <div className='relative ml-[100px]'>
                <img className='w-[80px] h-[64px] absolute top-[-120px] ' src={quote} alt="" srcset="" />
                <div className=''>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et. Facere pariatur perferendis dolores ex reprehenderit impedit, nemo nesciunt adipisci?</p>
                    <br />
                    <p>Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a, accumsan justo.</p>
                </div>
                <h4 className='font-semibold text-[28px] text-black mt-14 h-10'>Siti Sarah</h4>
                <small className='text-xs text-[#858585]'>Founder Travosca</small>
            </div>
        </div>
    );
};

export default Sectiontwo;