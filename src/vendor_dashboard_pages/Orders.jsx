import React from "react";
import { Link } from "react-router-dom";



class Orders extends React.Component {
    render() {
        return (
            <div className="App">
                <div id="preloader">
                    <div class="sk-three-bounce">
                        <div class="sk-child sk-bounce1"></div>
                        <div class="sk-child sk-bounce2"></div>
                        <div class="sk-child sk-bounce3"></div>
                    </div>
                </div>
                <div id="main-wrapper">
                    <div className="content-body">
                        <div className="container-fluid">
                            <div class="form-head d-flex mb-3 align-items-start">
                                <div class="me-auto d-none d-lg-block">
                                    <h4 class="text-dark font-w600 mb-0">Orders</h4>
                                    {/* <hr /> */}
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="#" class="text-primary">Order Detaills</Link></li>
                                        {/* <li class="breadcrumb-item active"><Link to="#">Order Detaills</Link></li> */}
                                    </ol>
                                </div>
                                <div class="dropdown mb-md-3 mb-2 ms-auto">
                                    <div class="btn btn-primary btn-sm text-white dropdown-toggle" data-bs-toggle="dropdown">
                                        <svg width={22} class="me-2" height={28} viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.16647 27.9558C9.25682 27.9856 9.34946 28.0001 9.44106 28.0001C9.71269 28.0001 9.97541 27.8732 10.1437 27.6467L21.5954 12.2248C21.7926 11.9594 21.8232 11.6055 21.6746 11.31C21.526 11.0146 21.2236 10.8282 20.893 10.8282H13.1053V0.874999C13.1053 0.495358 12.8606 0.15903 12.4993 0.042327C12.1381 -0.0743215 11.7428 0.0551786 11.5207 0.363124L0.397278 15.7849C0.205106 16.0514 0.178364 16.403 0.327989 16.6954C0.477614 16.9878 0.77845 17.1718 1.10696 17.1718H8.56622V27.125C8.56622 27.5024 8.80816 27.8373 9.16647 27.9558ZM2.81693 15.4218L11.3553 3.58389V11.7032C11.3553 12.1865 11.7471 12.5782 12.2303 12.5782H19.1533L10.3162 24.479V16.2968C10.3162 15.8136 9.92444 15.4218 9.44122 15.4218H2.81693Z"
                                                fill="#fff" />
                                        </svg>
                                        <span>ON DELIVERY</span>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-left">
                                        <Link class="dropdown-item" to="#">A To Z List</Link>
                                        <Link class="dropdown-item" to="#">Z To A List</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-3 col-xxl-4 col-lg-12 col-md-12">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-6 ">
                                            <div class="card h-auto">
                                                <div class="card-body text-center">
                                                    <img src="images/avatar/MJ.jpg" width={90} class="rounded-circle mb-4" alt="" />
                                                    <h4 class="mb-3 text-black font-w500">Lay Low</h4>
                                                    <Link to="#" class="btn btn-primary light btn-xs">Customer</Link>
                                                </div>
                                                <div class="card bg-secondary sticky mb-0">
                                                    <div class="card-header border-0 pb-0">
                                                        <h5 class=" text-white mt-2">Note Order</h5>
                                                    </div>
                                                    <div class="card-body pt-3">
                                                        <p class="fs-12  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                    </div>
                                                    {/* <div class="card-footer border-0 py-4 bg-warning rounded-xl">
                                                    <div class="media align-items-center">
                                                        <img class="me-3 img-fluid rounded-circle" width="50" src="images/delivery.png" alt="DexignZone" />
                                                        <div class="media-body">
                                                            <h5 class="my-0 text-white">Kof, <br />London EC50 4GN</h5>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-0 pb-0">
                                                    <h5 class="">Disease History</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div class="widget-timeline-icon">
                                                        <ul class="timeline">
                                                            <li>
                                                                <div class="icon bg-primary"></div>
                                                                <Link class="timeline-panel text-muted" to="#">
                                                                    <h6 class="mb-2">Order Delivered</h6>
                                                                    <p class="fs-12 mb-0 ">Wait..</p>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <div class="icon bg-primary"></div>
                                                                <Link class="timeline-panel text-muted" to="#">
                                                                    <h6 class="mb-2">Order Delivered</h6>
                                                                    <p class="fs-12 mb-0 ">Sat, 23 Jul 2020, 01:24 PM</p>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <div class="icon bg-primary"></div>
                                                                <Link class="timeline-panel text-muted" to="#">
                                                                    <h6 class="mb-2">Payment Success</h6>
                                                                    <p class="fs-12 mb-0 ">Fri, 22 Jul 2020, 10:44 AM</p>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <div class="icon bg-primary"></div>
                                                                <Link class="timeline-panel text-muted" to="#">
                                                                    <h6 class="mb-2">Order Created</h6>
                                                                    <p class="fs-12 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-xxl-8 col-lg-12 col-md-12">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="card">
                                                <div class="card-body pt-2">
                                                    <div class="table-responsive ">
                                                        <table class="table items-table">
                                                            <tr>
                                                                <th class="my-0 text-black font-w500 fs-14">Items</th>
                                                                <th style={{ width: "10%" }} class="my-0 text-black font-w500 fs-14">Qty</th>
                                                                <th style={{ width: "10%" }} class="my-0 text-black font-w500 fs-14">Price</th>
                                                                <th class="my-0 text-black font-w500 fs-14">Total Price</th>
                                                                <th></th>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="media">
                                                                        <Link to="ecom-product-detail.html"><img class="me-3 img-fluid rounded" width="55" src="images/dish/pic1.jpg" alt="DexignZone" /></Link>
                                                                        <div class="media-body">
                                                                            <small class="mt-0 mb-1 font-w500"><Link class="text-primary" to="#">Cake</Link></small>
                                                                            <h4 class="mt-0 mb-2 mb-4 fs-14"><Link class="text-black fs-10" to="ecom-product-detail.html">Chicken curry special with cucumber</Link></h4>
                                                                            {/*  */}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">3x</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$14.99</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$44.97</h4>
                                                                </td>
                                                                <td>
                                                                    <Link to="#" class="ti-close fs-15 text-danger las la-times-circle"></Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="media">
                                                                        <Link to="ecom-product-detail.html"><img class="me-3 img-fluid rounded" width="55" src="images/dish/pic1.jpg" alt="DexignZone" /></Link>
                                                                        <div class="media-body">
                                                                            <small class="mt-0 mb-1 font-w500"><Link class="text-primary" to="#">Cheese Cake</Link></small>
                                                                            <h4 class="mt-0 mb-2 mb-4 fs-14"><Link class="text-black fs-10" to="ecom-product-detail.html">Chicken curry special with cucumber</Link></h4>
                                                                            {/*  */}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">3x</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$14.99</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$44.97</h4>
                                                                </td>
                                                                <td>
                                                                    <Link to="#" class="ti-close fs-15 text-danger las la-times-circle"></Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="media">
                                                                        <Link to="ecom-product-detail.html"><img class="me-3 img-fluid rounded" width="55" src="images/dish/pic1.jpg" alt="DexignZone" /></Link>
                                                                        <div class="media-body">
                                                                            <small class="mt-0 mb-1 font-w500"><Link class="text-primary" to="#">Cup Cake</Link></small>
                                                                            <h4 class="mt-0 mb-2 mb-4 fs-14"><Link class="text-black fs-10" to="ecom-product-detail.html">Chicken curry special with cucumber</Link></h4>
                                                                            {/*  */}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">3x</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$14.99</h4>
                                                                </td>
                                                                <td>
                                                                    <h4 class="my-0 text-secondary fs-14 font-w600">$44.97</h4>
                                                                </td>
                                                                <td>
                                                                    <Link to="#" class="ti-close fs-15 text-danger las la-times-circle"></Link>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="full-map-area mb-4">
                                                        <img src="images/map-2.png" alt="map" />
                                                        <Link to="#" class="btn btn-danger btn-xs">View in Fullscreen</Link>
                                                        <i class="flaticon-381-location-4"></i>
                                                    </div>
                                                    <div class="row mx-0">
                                                        <div class="media align-items-center col-md-4 col-lg-4 px-0 mb-3 mb-md-0">
                                                            <img class="me-3 img-fluid rounded-circle" width={50} src="images/avatar/3.jpg" alt="DexignZone" />
                                                            <div class="media-body">
                                                                <h5 class="my-0 text-black fs-12">Kevin Hobs Jr.</h5>
                                                                <small className="fs-12">ID 412455</small>
                                                            </div>
                                                        </div>
                                                        <div class="iconbox col-md-4 col-lg-4 mb-3 mb-md-0">
                                                            <i class="las la-phone"></i>
                                                            <small className="fs-12">Telepon</small>
                                                            <p className="fs-12">+12 345 5662 66</p>
                                                        </div>
                                                        <div class="iconbox col-md-4 col-lg-4 mb-md-0">
                                                            <i class="las la-shipping-fast"></i>
                                                            <small className="fs-12">Delivery Time</small>
                                                            <p className="fs-12">12:52 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Orders;