import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Images/explore2.png'
import image2 from '../../assets/Images/exploreOne.png'
import image3 from '../../assets/Images/explorethree.png'
import icon1 from '../../assets/logo/Vector2.png'
import icon2 from '../../assets/logo/Vector.png'
import icon3 from '../../assets/logo/logo2.png'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-[-90px] bg-white left-[-8px] border px-4 py-2 rounded-md'
            onClick={onClick}
        >
            <img className='w-[20px]' src={icon1} alt="" />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-[-90px] bg-white right-[-8px] border px-4 py-2 rounded-md'
            onClick={onClick}
        >
            <img className='w-[20px] ' src={icon2} alt="" />

        </div>
    );
}
const slides = [
    {
        id: 1,
        image: image1,
        title: "Bali, Indonesia",
        description: "Bali is a beautiful tourist spot and is visited by many travelers."
    },
    {
        id: 2,
        image: image2,
        title: "Bandarban, Bangladesh",
        description: "Bandarban is a beautiful tourist spot and is visited by many travelers."
    },

    {
        id: 3,
        image: image3,
        title: "Cha Bagan, Bangladesh",
        description: "Cha Bagan is a beautiful tourist spot and is visited by many travelers."
    },

];

const SignlePlce = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container py-10 ">
            <Slider {...settings}>
                {slides.map(slide => (
                    <div className='px-2 ' key={slide.id}>
                        {slide.image ? (
                            <div to="#" className="group relative block bg-black h-[300px] rounded-xl">
                                <img
                                    alt=""
                                    src={slide.image}
                                    className="absolute rounded-xl inset-0 h-full w-full object-cover object-center opacity-75  transition-opacity group-hover:opacity-50"
                                />
                                <div className="relative p-2 sm:p-3 lg:py-8 ">
                                    <div className="mt-40 sm:mt-48 lg:mt-72 ">
                                        <div
                                            className="translate-y-8 bg-white transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <h4 className='font-bold text-[24px]'>{slide.title}</h4>
                                            <p className="text-sm text-black p-1">
                                                {slide.description}
                                            </p>
                                            <div className="absolute top-[-33px] right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                                <span className="text-black text-xl"><img src={icon3} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <h3>{slide.title}</h3>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SignlePlce;
