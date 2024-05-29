import React from 'react';
import Nav from '../Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Social from '../Pages/SocialLink/Social';
import Subscribe from '../Pages/Subscribe/Subscribe';

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Subscribe />
            <Social />
        </div>
    );
};

export default Main;