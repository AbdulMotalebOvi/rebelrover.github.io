import React, { useState } from 'react';
import brand from '../assets/logoSocial/brandtwo.png';
import drop from '../assets/logoSocial/dropdown.png';
import searchIcon from '../assets/logoSocial/search.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className="px-[45px] bg-[#120B0B82]  fixed top-0 w-full z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={brand} alt="Logo" className="h-16 mr-3" />
                </div>
                <div className="hidden md:flex space-x-10">
                    <NavLink to="/" exact className="text-white hover:text-red-500" activeClassName="text-blue-500">Home</NavLink>
                    <NavLink to="/about" className="text-white  hover:text-red-500" activeClassName="text-blue-500">About us</NavLink>
                    <div className="relative group">
                        <Link to='/packages' className="text-white  hover:text-red-500 flex relative">
                            Package
                            <span><img className="absolute top-2 ml-1" src={drop} alt="dropdown icon" /></span>
                        </Link>
                        <div className="absolute left-0 w-40 bg-white text-black mt-2 rounded-lg shadow-lg hidden group-hover:block">
                            <NavLink to="/package1" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 1</NavLink>
                            <NavLink to="/package2" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 2</NavLink>
                            <NavLink to="/package3" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 3</NavLink>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="text-white  hover:text-red-500 flex relative">
                            Destination
                            <span><img className="absolute top-2 ml-1" src={drop} alt="dropdown icon" /></span>
                        </button>
                        <div className="absolute left-0 w-40 bg-white text-black mt-2 rounded-lg shadow-lg hidden group-hover:block">
                            <NavLink to="/destination1" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 1</NavLink>
                            <NavLink to="/destination2" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 2</NavLink>
                            <NavLink to="/destination3" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 3</NavLink>
                        </div>
                    </div>
                    <NavLink to="/blog" className="text-white  hover:text-red-500" activeClassName="text-blue-500">Blog</NavLink>
                    <NavLink to="/contact" className="text-white  hover:text-red-500" activeClassName="text-blue-500">Contact</NavLink>
                    <button onClick={toggleSearch} className=" hover:text-red-500">
                        <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <NavLink to="/" exact className="text-white  block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Home</NavLink>
                <NavLink to="/" exact className="text-white  block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">About Us</NavLink>

                <div className="relative group">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-200 flex relative">
                        Package
                        <span><img className="absolute top-2 ml-1" src={drop} alt="dropdown icon" /></span>
                    </button>
                    <div className="w-full mt-2 bg-white text-black rounded-lg shadow-lg">
                        <NavLink to="/package1" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 1</NavLink>
                        <NavLink to="/package2" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 2</NavLink>
                        <NavLink to="/package3" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Package 3</NavLink>
                    </div>
                </div>
                <div className="relative group">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-200 flex relative">
                        Destination
                        <span><img className="absolute top-2 ml-1" src={drop} alt="dropdown icon" /></span>
                    </button>
                    <div className="w-full mt-2 bg-white text-black rounded-lg shadow-lg">
                        <NavLink to="/destination1" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 1</NavLink>
                        <NavLink to="/destination2" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 2</NavLink>
                        <NavLink to="/destination3" className="block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Destination 3</NavLink>
                    </div>
                </div>
                <NavLink to="/blog" className="text-white  block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Blog</NavLink>
                <NavLink to="/contact" className="text-white  block px-4 py-2 hover:bg-gray-200" activeClassName="text-blue-500">Contact</NavLink>
                <button onClick={toggleSearch} className="w-full text-left px-4 py-2 hover:bg-gray-200 flex">
                    <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
                    Search
                </button>
            </div>
            {isSearchOpen && (
                <div className="absolute top-[-50%] right-[0px] inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button onClick={toggleSearch} className="mt-2 text-red-500 border px-4 py-2 rounded-md">Close</button>
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Nav;
