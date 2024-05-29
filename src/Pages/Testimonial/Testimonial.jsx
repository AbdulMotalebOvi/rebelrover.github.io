import React from 'react';
import Slider from "react-slick";
import Review from './Review';
import profile1 from '../../assets/clients/pr1.png'
import profile2 from '../../assets/clients/pr2.png'
import profile3 from '../../assets/clients/pr3.png'
import vector1 from '../../assets/logo/Vector.png'
import vector2 from '../../assets/logo/Vector2.png'


const profiles = [
    {
        name: 'Sara Jay',
        title: 'Traveller',
        image: profile3,
        rating: 5,
        description: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.'
    },
    {
        name: 'Cristian Daniel',
        title: 'Traveller',
        image: profile2,
        rating: 5,
        description: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.'
    },
    {
        name: 'Kausar Hasan',
        title: 'Traveller',
        image: profile1,
        rating: 5,
        description: 'Before we define any approach, we need to deline the brands overall goal. We then need to dive.'
    },

];

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-[-90px] right-20 border px-4 py-2 rounded-md'
            onClick={onClick}
        >
            <img className='w-[20px]' src={vector2} alt="" />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-[-90px] right-0 border px-4 py-2 rounded-md'
            onClick={onClick}
        >
            <img className='w-[20px]' src={vector1} alt="" />

        </div>
    );
}
const Testimonial = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='px-[69px]   my-[140px]'>
            <div className='space-y-3 text-balance'>
                <h6 className='tracking-widest text-[#626262] h-4 font-semibold'>TESTIMONIAL</h6>
                <h3 className='font-semibold text-6xl text-[#020202]'>What our client say </h3>
                <p className='text-[#626262]'>Create  a visual identity for your company and a overall brand</p>
            </div>
            <div className='mt-[115px] '>
                <div className="slider-container  drop-shadow-md">
                    <Slider {...settings}>
                        {profiles.map((profile, index) => (
                            <Review key={index} profile={profile} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;