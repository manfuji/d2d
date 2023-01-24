import React from "react";
import { Link } from "react-router-dom";





class Wallet extends React.Component {
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
                        {/* Row */}
                        <div className="container-fluid">
                            <div className="form-head d-flex mb-3 align-items-start">
                                <div className="me-auto d-none d-lg-block">
                                    <h3 className="font-w600 mb-0">Wallet</h3>
                                    <small className="mb-0">Welcome to Your Wallet!</small>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="widget-stat card">
                                        <div class="card-body p-4">
                                            <div class="media ai-icon d-flex">
                                                <span class="me-3 bgl-primary text-primary">
                                                    <span className="fs-24 font-w400">₵</span>
                                                </span>
                                                <div class="media-body">
                                                    <h3 class="mb-0 text-black"><span class="counter ms-0">56</span></h3>
                                                    <p class="mb-0 myTextSize">Available Balance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="widget-stat card">
                                        <div class="card-body p-4">
                                            <div class="media ai-icon d-flex">
                                                <span class="me-3 bgl-primary text-primary">
                                                    <span className="fs-24 font-w400">₵</span>
                                                </span>
                                                <div class="media-body">
                                                    <h3 class="mb-0 text-black"><span class="counter ms-0">12</span>k</h3>
                                                    <p class="mb-0 myTextSize">Current Balance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="form-head d-flex mb-3 align-items-start">
                                <div className="me-auto d-none d-lg-block">
                                    <h3 className="font-w600 mb-0">Payment History</h3>
                                    <small className="mb-0">Here is your payment history data!</small>
                                </div>

                                <div className="dropdown custom-dropdown">
                                    <div class="btn btn-sm btn-primary light d-flex align-items-center svg-btn" id="filter" data-bs-toggle="dropdown">
                                        <div class="text-start ms-3">
                                            <span className="d-block fs-13">Print</span>
                                        </div>
                                        <i class="fa fa-angle-down scale5  ms-3"></i>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <Link class="dropdown-item" to="#">Print</Link>
                                        <Link class="dropdown-item" to="#">PDF</Link>
                                    </div>
                                </div>
                                <Link to="../request-withdrawal">
                                    <button className="btn btn-primary btn-sm ml-1" id="filter" style={{float: "right" }}>Request Withdrawal</button>
                                </Link>
                            </div>

                            <div className="row">
                                <div class="col-lg-12">
                                    <br />
                                    <div class="card" id="card">
                                        <div class="card-header">
                                            <h4 class="card-title">History</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-responsive-md">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "50px" }}>
                                                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                    <input type="checkbox" class="custom-control-input" id="checkAll" required="" />
                                                                    <label class="custom-control-label" for="checkAll"></label>
                                                                </div>
                                                            </th>
                                                            <th># Transaction ID</th>
                                                            <th>Date</th>
                                                            <th>Amount</th>
                                                            <th>Time</th>
                                                            <th>Means of Payment</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheckBox2" required="" />
                                                                    <label class="custom-control-label" for="customCheckBox2"></label>
                                                                </div>
                                                            </td>
                                                            <td>#00045</td>
                                                            <td>26 February 2022</td>
                                                            <td>GH¢ 2,000</td>
                                                            <td>	12:42 AM</td>
                                                            <td>0566666666</td>
                                                            <td><b className="light text-success  fs-10" id="filter">Completed</b></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheckBox2" required="" />
                                                                    <label class="custom-control-label" for="customCheckBox2"></label>
                                                                </div>
                                                            </td>
                                                            <td>#00045</td>
                                                            <td>26 February 2022</td>
                                                            <td>GH¢ 2,000</td>
                                                            <td>	12:42 AM</td>
                                                            <td>0566666666</td>
                                                            <td><b className="light text-danger  fs-10" id="filter">Denialed</b></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheckBox2" required="" />
                                                                    <label class="custom-control-label" for="customCheckBox2"></label>
                                                                </div>
                                                            </td>
                                                            <td>#00045</td>
                                                            <td>26 February 2022</td>
                                                            <td>GH¢ 2,000</td>
                                                            <td>	12:42 AM</td>
                                                            <td>0566666666</td>
                                                            <td><b className="light text-warning  fs-10" id="filter">Pending</b></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Wallet;