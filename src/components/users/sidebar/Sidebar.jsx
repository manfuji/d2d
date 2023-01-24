import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        // Sidebar Starts
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li><Link className="ai-icon" to="/users-dashboard" >
                        <i class="flaticon-381-home-3"></i>
                        <span className="nav-text">Home</span>
                    </Link>
                    </li>
                    <li><Link className="ai-icon" to="/account-info" >
                        <i className="flaticon-381-promotion"></i>
                        <span className="nav-text">Account Infomation</span>
                    </Link>

                    </li>
                    <li><Link className="ai-icon" to="/withdrawals" >
                        <i className="flaticon-381-gift"></i>
                        <span className="nav-text">Offers</span>
                    </Link>

                    </li>
                    <li><Link className="ai-icon" to="/user-settings" >
                        <i className="flaticon-381-settings-1"></i>
                        <span className="nav-text">Settings</span>
                    </Link>
                    </li>
                </ul>

                {/* <div className="add-menu-sidebar">
                    <img src="images/icon1.png" alt="dessert" />
                    <p>Organize your menus through button bellow</p>
                    <Link to="/" className="btn bg-white text-white">+ Add Menus</Link>
                </div> */}
               <div className="copyright">
                    <p className="fs-10 text-primary font-w500">
                    Users Dashboard © 2022
                    </p>
                    <small>Powered By Zelus Technologies</small>
                </div>
            </div>
        </div>
        // Sidebar Ends

    );
}
export default Sidebar;