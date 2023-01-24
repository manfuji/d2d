import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        // Sidebar Starts
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li><Link className="ai-icon" to="/superadmin_dashboard" >
                        <i class="flaticon-381-home-3"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Vendors</span>
                    </Link>
                        <ul>
                            <li><Link to="/add-vendor">Add Vendor</Link></li>
                            <li><Link to="/manage-vendors">Manage Vendor</Link></li>
                            {/* <li><Link to="/order-list">Approve Vendor</Link></li> */}

                        </ul>
                    </li>
                    <li><Link className="ai-icon" to="/approve-vendors" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Approve Vendor</span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Users</span>
                    </Link>
                        <ul >
                            <li><Link to="/add-user">Add Users</Link></li>
                            <li><Link to="/manage-users">Manage Users</Link></li>

                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-user-7"></i>
                        <span className="nav-text">Staff</span>
                    </Link>
                        <ul >
                            <li><Link to="/add-staff">Create Staffs</Link></li>
                            <li><Link to="/manage-staffs">Manage Staffs</Link></li>

                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/add-offer" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Riders</span>
                    </Link>
                        <ul >
                            <li><Link to="/add-rider">Create Riders</Link></li>
                            <li><Link to="/manage-riders">Manage Riders</Link></li>
                            {/* <li><Link to="/">Approve Riders</Link></li> */}

                        </ul>
                    </li>
                    <li><Link className=" ai-icon" to="/approve-rider" >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text">Approve Riders</span>
                    </Link>

                    </li>
                    <li><Link className=" ai-icon" to="/access-tickets" >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text">Access Ticketing</span>
                    </Link>

                    </li>
                    <li><Link to="/" className="has-arrow ai-icon" >
                        <i className="flaticon-381-search-3"></i>
                        <span className="nav-text">Report</span>
                    </Link>
                        <ul >
                            <li><Link to="/financial-report">Financial Report</Link></li>
                            <li><Link to="/system-report">System Report</Link></li>
                            <li><Link to="/user-report">Users Report</Link></li>

                        </ul>
                    </li>
                    <li><Link className="ai-icon" to="/announcements" >
                        <i className="flaticon-381-promotion"></i>
                        <span className="nav-text">Announcements</span>
                    </Link>

                    </li>
                    <li><Link className="ai-icon" to="/withdrawals" >
                        <i className="flaticon-381-user-9"></i>
                        <span className="nav-text">Withdrawals</span>
                    </Link>

                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="flaticon-381-settings-1"></i>
                        <span className="nav-text">Settings</span>
                    </Link>
                        <ul >
                            <li><Link to="/shop-settings">SMS API's</Link></li>
                            <li><Link to="/profile-settings">Account Settings</Link></li>
                            <li><Link to="/payment-settings">Message templates</Link></li>

                        </ul>
                    </li>
                </ul>

                <div className="add-menu-sidebar">
                    <img src="images/icon1.png" alt="dessert" />
                    <p>Organize your menus through button bellow</p>
                    {/* <Link to="/" className="btn bg-white text-white">+ Add Menus</Link> */}
                </div>
                <div className="copyright">
                    <p>
                        <strong>Desserts to Door - Vendor Dashboard</strong> © 2022 All
                        Rights Reserved
                    </p>
                    <p>Powered By Zelus Technologies</p>
                </div>
            </div>
        </div>
        // Sidebar Ends

    );
}
export default Sidebar;