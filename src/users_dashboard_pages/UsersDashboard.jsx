import React from "react";
import { Link } from "react-router-dom";

class UsersDashboard extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <div id="preloader">
                <div class="sk-three-bounce">
                    <div class="sk-child sk-bounce1"></div>
                    <div class="sk-child sk-bounce2"></div>
                    <div class="sk-child sk-bounce3"></div>
                </div>
            </div> */}

        <div>
          <div className="content-body">
            {/* Row */}
            <div className="container-fluid">
              <div className="form-head d-flex mb-3 align-items-start">
                <div className="me-auto d-none d-lg-block">
                  <h3 className="font-w600 mb-0">Pending Orders</h3>
                  {/* <small className="mb-0">Welcome to Your Dashboard!</small> */}
                </div>
              </div>
              <hr />

              <div className="row">
                <div class="col-lg-12">
                  <br />
                  <div class="card" id="card">
                    <div class="card-header">
                      {/* <h4 class="card-title"></h4> */}
                      <div class="header-left">
                        <div class="input-group search-area">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search here..."
                          />
                          <span class="input-group-text">
                            <Link to="#">
                              <i class="flaticon-381-search-2"></i>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: "50px" }}>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="checkAll"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="checkAll"
                                  ></label>
                                </div>
                              </th>
                              <th>Order ID</th>
                              <th>Order Details</th>
                              <th>Date</th>
                              <th>Shop Name</th>
                              <th>Total Cost</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheckBox2"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheckBox2"
                                  ></label>
                                </div>
                              </td>
                              <td>00678</td>
                              <td>Cakes</td>
                              <td>07/10/22</td>
                              <td>Adom Bakery</td>
                              <td>₵45</td>
                              <td>
                                <div class="d-flex">
                                  <Link to="#" class="text-warning" id="">
                                    Pending
                                  </Link>
                                  {/* <Link to="#" class="btn btn-danger shadow btn-xs sharp sweet-confirm"><i class="fa fa-trash"></i></Link> */}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />

              <div className="form-head d-flex mb-3 align-items-start">
                <div className="me-auto d-none d-lg-block">
                  <h3 className="font-w600 mb-0">Recents Orders</h3>
                  {/* <small className="mb-0">Welcome to Your Dashboard!</small> */}
                </div>
              </div>
              <hr />

              <div className="row">
                <div class="col-lg-12">
                  <br />
                  <div class="card" id="card">
                    <div class="card-header">
                      {/* <h4 class="card-title"></h4> */}
                      <div class="header-left">
                        <div class="input-group search-area">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search here..."
                          />
                          <span class="input-group-text">
                            <Link to="#">
                              <i class="flaticon-381-search-2"></i>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: "50px" }}>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="checkAll"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="checkAll"
                                  ></label>
                                </div>
                              </th>
                              <th>Order ID</th>
                              <th>Order Details</th>
                              <th>Date</th>
                              <th>Shop Name</th>
                              <th>Total Cost</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheckBox2"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheckBox2"
                                  ></label>
                                </div>
                              </td>
                              <td>00678</td>
                              <td>Cakes</td>
                              <td>07/10/22</td>
                              <td>Adom Bakery</td>
                              <td>₵45</td>
                              <td>
                                <div class="d-flex">
                                  <Link to="#" class="text-warning" id="">
                                    Pending
                                  </Link>
                                  {/* <Link to="#" class="btn btn-danger shadow btn-xs sharp sweet-confirm"><i class="fa fa-trash"></i></Link> */}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UsersDashboard;
