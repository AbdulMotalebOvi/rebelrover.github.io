import React from 'react';
import brand from '../../assets/logoSocial/rebel.png';
import logo1 from '../../assets/logoSocial/location.png'
import logo2 from '../../assets/logoSocial/message.png'
import logo3 from '../../assets/logoSocial/cellphone.png'
import facebook from '../../assets/logoSocial/facebook.png'
import instagram from '../../assets/logoSocial/instgram.png'
import twitter from '../../assets/logoSocial/twitter.png'
import youtube from '../../assets/logoSocial/youtube.png'
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Social = () => {
    return (
        <div className='bg-white dark:bg-white'>
            <div className=' px-[70px] mx-auto max-w-screen-xl pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
                <div className='grid grid-cols-1 gap-5                                                  lg:grid-cols-4'>
                    <div >
                        <img className='w-[390px] h-[90px]' src={brand} alt="" srcset="" />
                        <p className="mt-3 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>
                    <div class="text-center sm:text-left dark:text-black">
                        <p class="text-[24px] font-semibold ">Contact Information</p>
                        <ul class="mt-8 space-y-4 text-sm">
                            <li>
                                <address
                                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    to="#"
                                >
                                    <img src={logo1} alt="" srcset="" />

                                    <span class="flex-1 text-gray-700">732 Despard St, Atlanta</span>
                                </address>
                            </li>

                            <li>
                                <Link
                                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    to="#"
                                >
                                    <img src={logo2} alt="" srcset="" />

                                    <span class="flex-1 text-gray-700">+97 888 8888</span>
                                </Link>
                            </li>

                            <li
                                class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            >
                                <img src={logo3} alt="" srcset="" />

                                <Link class="-mt-0.5 flex-1 not-italic text-gray-700">
                                    info@traveller.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-[24px] font-semibold text-black">About Us</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" to="#">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" to="#">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" to="#">
                                    Tours
                                </Link>
                            </li>

                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" to="#"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-[24px] text-black font-semibold ">Follow Us</p>

                        <ul className="mt-8 flex justify-center gap-3 sm:justify-start md:gap-8">
                            <li>
                                <Link
                                    to="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <img src={facebook} alt="" srcset="" />
                                    <span className="sr-only">Facebook</span>

                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <img src={instagram} alt="" srcset="" />
                                    <span className="sr-only">Instagram</span>

                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <img src={twitter} alt="" srcset="" />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                >
                                    <span className="sr-only">Youtube</span>
                                    <img src={youtube} alt="" srcset="" />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <Copyright />
        </div>
    );
};

export default Social;