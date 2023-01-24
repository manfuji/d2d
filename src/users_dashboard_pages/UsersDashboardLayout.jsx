import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/users/navbar/Navbar";
import Sidebar from "../components/users/sidebar/Sidebar";
import Footer from "../components/users/footer/Footer"



const UsersDashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}
export default UsersDashboardLayout;