import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/vendors/sidebar/Sidebar";
import Navbar from "../components/vendors/navbar/Navbar";
import Footer from "../components/vendors/footer/Footer";


const VendorDashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
};
export default VendorDashboardLayout;