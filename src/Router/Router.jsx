import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutlandingPage from "../Pages/AboutUs/AboutlandingPage";
import banner from '../assets/AboutImages/aboutusbanner.png'
import banner2 from '../assets/packages/banner2.png'
import CommonSection from "../Pages/CommonSection";
import PackageLandingPage from "../Pages/Packages/PackageLandingPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: (
                    <div>
                        <CommonSection title="About Us" banner={banner} />
                        <AboutlandingPage />
                    </div>
                )
            },
            {
                path: '/packages',
                element: (
                    <div>
                        <CommonSection title="Travel Packages" banner={banner2} />
                        <PackageLandingPage />
                    </div>
                )
            },
        ]
    }
])