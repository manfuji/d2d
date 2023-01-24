import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        // Sidebar Starts
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li><Link className="ai-icon" to="/dashboard" >
                        <i class="flaticon-381-home-3"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-notepad-1"></i>
                        <span className="nav-text">Orders</span>
                    </Link>
                        <ul>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/order-list">Order List</Link></li>

                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-box"></i>
                        <span className="nav-text">Products</span>
                    </Link>
                        <ul >
                            <li><Link to="/add-products">Add Products</Link></li>
                            <li><Link to="/edit-products">Edit Products</Link></li>

                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-box-2"></i>
                        <span className="nav-text">Packages</span>
                    </Link>
                        <ul >
                            <li><Link to="/add-new-package  ">Add New Package</Link></li>
                            {/* <li><Link to="/">Edit Package</Link></li> */}

                        </ul>
                    </li>
                    <li><Link className=" ai-icon" to="/add-offer" >
                        <i className="flaticon-381-gift"></i>
                        <span className="nav-text">Add Offer</span>
                    </Link>

                    </li>
                    <li><Link to="/wallet" className="ai-icon" >
                        <i className="flaticon-381-book"></i>
                        <span className="nav-text">Wallet</span>
                    </Link>
                    </li>
                    <li><Link className=" ai-icon" to="/tickets" >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text">Access Ticketing</span>
                    </Link>

                    </li>
                    <li><Link className="ai-icon" to="/recent-riders" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Recent Riders</span>
                    </Link>

                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-settings-1"></i>
                        <span className="nav-text">Settings</span>
                    </Link>
                        <ul >
                            <li><Link to="/shop-settings">Shop Settings</Link></li>
                            <li><Link to="/profile-settings">Profile Settings</Link></li>
                            <li><Link to="/payment-settings">Payment Settings</Link></li>

                        </ul>
                    </li>
                </ul>

                <div className="add-menu-sidebar">
                    <img src="images/icon1.png" alt="dessert" />
                    <p className="fs-12">Organize your all your menus on Desserts to Door Plateform</p>
                    {/* <Link to="/" className="btn bg-white text-white">+ Add Menus</Link> */}
                </div>
                <div className="copyright">
                    <p className="fs-10 text-primary font-w500">
                    Vendor Dashboard © 2022
                    </p>
                    <small>Powered By Zelus Technologies</small>
                </div>
            </div>
        </div>
        // Sidebar Ends

    );
}
export default Sidebar;