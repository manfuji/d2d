import React from "react";
import { Link } from "react-router-dom";

class Withdrawals extends React.Component {
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
                  <h3 className="font-w600 mb-0">Withdrawals</h3>
                  <small className="mb-0">Withdrawals History!</small>
                </div>
              </div>
              <hr />

              <div className="row">
                <div class="col-xl-4 col-lg-4">
                  <div class="basic-form">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Year:</label>
                        <select class="default-select  form-control wide">
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
                        <select class="default-select  form-control wide">
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
                              <th>Name</th>
                              <th>Category</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Mode</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <span class="w-space-no">James Mensah</span>
                                </div>
                              </td>
                              <td>Rider</td>
                              <td>800</td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-success shadow btn-xs sharp me-1"
                                    id=""
                                  >
                                    <i class="fa fa-check"></i>
                                  </Link>
                                </div>
                              </td>
                              <td>Bank</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <span class="w-space-no">Ama Akyaa</span>
                                </div>
                              </td>
                              <td>Vendor</td>
                              <td>800</td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-danger shadow btn-xs sharp sweet-confirm"
                                  >
                                    <i class="fa fa-times"></i>
                                  </Link>
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
      </div>
    );
  }
}
export default Withdrawals;
