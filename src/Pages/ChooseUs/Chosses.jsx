import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bg1 from '../../assets/Images/herotwo.png'
import man from '../../assets/logo/MAN.png'
import dollar from '../../assets/logo/DOLLAR.png'
import cup from '../../assets/logo/CUP.png'
import icon1 from '../../assets/logo/Vector2.png'
import icon2 from '../../assets/logo/Vector.png'
import arrow from '../../assets/logo/Vector 3.png'
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-[-113px] bg-white left-[-72px] border px-4 py-2 rounded-md'
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
            className='absolute top-[-113px] bg-white right-[-72px] border px-4 py-2 rounded-md'
            onClick={onClick}
        >
            <img className='w-[20px] ' src={icon2} alt="" />

        </div>
    );
}

const slides = [
    {
        id: 1,
        image: man,
        title: "Best Service",
        description: "our service is reliable and convenient, our service is quality.."
    },
    {
        id: 2,
        image: dollar,
        title: "Price Guarantee",
        description: "our service is reliable and convenient, our service is quality"
    },

    {
        id: 3,
        image: cup,
        title: "Handpicked Hotels",
        description: "our service is reliable and convenient, our service is quality"
    },

];
const Chosses = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
        <div style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '600px',
        }}>
            <div>
                <div className='text-center text-balance text-white py-[60px]'>
                    <h1 className='text-6xl font-bold '>Why choose Us?</h1>
                    <p >our services have been trusted by world travelers.</p>
                </div>

                <div className='slider-container mt-10 px-[188px]'>
                    <Slider {...settings}>
                        {slides.map(slide => (
                            <div className='px-4 ' key={slide.id}>
                                {slide.image ? (

                                    < article
                                        className="rounded-lg border border-gray-100   bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                                    >
                                        <span className="inline-block rounded bg-black p-4 text-white">
                                            <img src={slide.image} alt={slide.title} />
                                        </span>


                                        <h3 className=' font-semibold text-[24px] mt-5'>{slide.title}</h3>


                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#858585]">
                                            {slide.description}
                                        </p>

                                        <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-black">
                                            Learn More

                                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                                <img src={arrow} alt='' />
                                            </span>
                                        </Link>
                                    </article>

                                ) : (
                                    <h3>{slide.title}</h3>
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </div >

    );
};

export default Chosses;