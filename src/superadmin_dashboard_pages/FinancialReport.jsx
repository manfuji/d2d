import React from "react";
import { Link } from "react-router-dom";


class FinancialReport extends React.Component {
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
                                    <h3 className="font-w600 mb-0">Financial Reports</h3>
                                    <small className="mb-0">Reports</small>
                                </div>

                                <div className="col-xl-3 col-lg-3" id="">
                                    <div className="row">
                                        <div class="col-xl-3 col-xxl-3 col-3">
                                            <div class="form-check custom-checkbox mb-3">
                                                <input type="checkbox" class="form-check-input" id="customCheckBox0" />
                                                <label class="form-check-label" for="customCheckBox1">Rider</label>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-xxl-3 col-3">
                                            <div class="form-check custom-checkbox mb-3">
                                                <input type="checkbox" class="form-check-input" id="customCheckBox2" />
                                                <label class="form-check-label" for="customCheckBox1">Vendor</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr />

                            {/* Bar Chart Section starts */}
                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6" id="hidden">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Donught Chart</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div id="morris_donught" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6" id="hidden">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Line Chart</h4>
                                                </div>
                                                <div class="card-body p-0">
                                                    <div id="morris_line" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                            <div class="card">
                                                {/* <div class="card-header">
                                                    <h4 class="card-title">Bar Chart</h4>
                                                </div> */}
                                                <div class="card-body">
                                                    <div id="morris_bar" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6" id="hidden">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Line Chart</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div id="line_chart_2" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6" id="hidden">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Bar Chart</h4>
                                                </div>
                                                <div class="card-body">

                                                    <div id="morris_bar_stalked" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6" id="hidden">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Area Chart</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div id="morris_area" class="morris_chart_height"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xl-3 col-lg-4">
                                    <div class="basic-form">
                                        <form>
                                            <div class="mb-3">
                                            <p class="mb-1">Expenses:</p>
                                                <select class="default-select  form-control wide" >
                                                    <option>Expenses</option>
                                                    <option>Earnings</option>
                                                    <option>User</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4">
                                    <div class="">
                                        <p class="mb-1">From:</p>
                                        <input type="date" class="form-control" name="daterangefrom" value="" />
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3">
                                    <div class="">
                                        <p class="mb-1">To:</p>
                                        <input type="date" class="form-control" name="daterangeto" value="" />
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3">
                                {/* <p class="mb-1" style={{display:"none"}}>Click to print:</p> */}
                                    <div class="basic-form" style={{position: "relative", top: 25, float: "right"}}>
                                        <button className="btn btn-primary btn-sm" id="filter">Print</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-lg-12">
                                    <br />
                                    <div class="card" id="card">
                                        <div class="card-header">
                                            {/* <h4 class="card-title"></h4> */}
                                            <div class="header-left">
                                                <div class="input-group search-area">
                                                    <input type="text" class="form-control" placeholder="Search here..." />
                                                    <span class="input-group-text"><Link to="#"><i class="flaticon-381-search-2"></i></Link></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-responsive-md">
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Amount</th>
                                                            <th>Profit</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>13/10/22</td>
                                                            <td>₵ 2,000</td>
                                                            <td>₵ 1,000</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>23/09/22</td>
                                                            <td>₵ 6,00</td>
                                                            <td>₵ 2,000</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>01/11/22</td>
                                                            <td>₵ 5,000</td>
                                                            <td>₵ 3,000</td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <th>Total</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th>₵</th>
                                                    </tfoot>
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
            </div >
        )
    }
}
export default FinancialReport;