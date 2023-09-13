import React from 'react'
import LandingNavbar from '../../sections/general/Navbar/Landing';
import { Outlet } from "react-router-dom";

const HomeLayout = (props) => {
    return (
        <>
            <LandingNavbar />
            <Outlet/>
        </>
    )
}

export default HomeLayout;