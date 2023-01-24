import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/superadmin/navbar/Navbar";
import Sidebar from "../components/superadmin/sidebar/Sidebar";
import Footer from "../components/superadmin/footer/Footer";



const SuperadminDashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}
export default SuperadminDashboardLayout;