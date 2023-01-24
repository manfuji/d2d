import React from "react";
import { Link } from "react-router-dom";


class Withdrawals extends React.Component{
    render(){
        return(
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
                                <h3 className="font-w600 mb-0">Withdrawals</h3>
                                <small className="mb-0">Withdrawals History!</small>
                            </div>

                            {/* <div className="dropdown custom-dropdown" id="filter">
                                <div className="btn btn-sm btn-primary light d-flex align-items-center svg-btn" data-bs-toggle="dropdown">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z"
                                        fill="#ffffff"></path></g></svg>
                                    <div className="text-start ms-3">
                                        <span className="d-block fs-12">Filter Periode</span>
                                        <small className="d-block fs-10">4 June 2020 - 4 July 2020</small>
                                    </div>
                                    <i className="fa fa-angle-down scale5 ms-3"></i>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="#">4 June 2020 - 4 July 2020</Link>
                                    <Link className="dropdown-item" to="#">5 july 2020 - 4 Aug 2020</Link>
                                </div>
                            </div> */}
                        </div>
                        <hr />
                        
                        <div className="row">
                            <div class="col-xl-4 col-lg-4">
                                <div class="basic-form">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">Year:</label>
                                            <select class="default-select  form-control wide" >
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                                <option>2025</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="basic-form">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">Month:</label>
                                            <select class="default-select  form-control wide" >
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </select>
                                        </div>
                                    </form>
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
                                                        <th>Name</th>
                                                        <th>Category</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Mode</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><div class="d-flex align-items-center"><span class="w-space-no">James Mensah</span></div></td>
                                                        <td>Rider</td>
                                                        <td>800</td>
                                                        <td>
                                                            <div class="d-flex">
                                                            <Link to="#" class="btn btn-success shadow btn-xs sharp me-1" id="" ><i class="fa fa-check"></i></Link>
                                                            </div>
                                                        </td>
                                                        <td>Bank</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div class="d-flex align-items-center"><span class="w-space-no">Ama Akyaa</span></div></td>
                                                        <td>Vendor</td>
                                                        <td>800</td>
                                                        <td>
                                                            <div class="d-flex">
                                                            <Link to="#" class="btn btn-danger shadow btn-xs sharp sweet-confirm"><i class="fa fa-times"></i></Link>
                                                            </div>
                                                        </td>
                                                        <td>Mobile Money</td>
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
        </div >
        )
    }
}
export default Withdrawals;