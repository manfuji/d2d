import React from "react";
import "../Vendor-dashboard.css";

class RecentRiders extends React.Component {
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
                  <h3 className="font-w600 mb-0">Riders</h3>
                  <small className="mb-0">
                    Welcome to Your Recent Riders Info
                  </small>
                </div>

                {/* <div className="dropdown custom-dropdown" id="filter">
                                <div class="btn btn-sm btn-primary light d-flex align-items-center svg-btn" data-bs-toggle="dropdown">
                                    <div class="text-start ms-3">
                                        <span className="d-block fs-16">In Stock</span>
                                        <small className="d-block fs-13">Products in Stock</small>
                                    </div>
                                    <i class="fa fa-angle-down scale5  ms-3"></i>
                                </div>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <Link class="dropdown-item" to="#">Yes</Link>
                                    <Link class="dropdown-item" to="#">No</Link>
                                </div>
                            </div> */}
              </div>
              <hr />
              <div className="row">
                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <div class="widget-stat card">
                    <div class="card-body p-4">
                      <div class="media ai-icon d-flex">
                        <span class="me-3 bgl-primary text-primary">
                          {/* <!-- <i class="ti-user"></i> --> */}
                          <svg
                            width={36}
                            height={20}
                            viewBox="0 0 36 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M31.75 6.75H30.0064L30.2189 4.62238C30.2709 4.10111 30.2131 3.57473 30.0493 3.07716C29.8854 2.57959 29.6192 2.12186 29.2676 1.73348C28.9161 1.3451 28.4871 1.03468 28.0082 0.822231C27.5294 0.609781 27.0114 0.500013 26.4875 0.5H7.0125C6.48854 0.500041 5.9704 0.609864 5.49148 0.822391C5.01256 1.03492 4.58348 1.34543 4.23189 1.73392C3.88031 2.12241 3.61403 2.58026 3.45021 3.07795C3.28639 3.57564 3.22866 4.10214 3.28075 4.6235L5.2815 24.6224C5.31508 24.9222 5.38467 25.2168 5.48875 25.5H1.75C1.41848 25.5 1.10054 25.6317 0.866116 25.8661C0.631696 26.1005 0.5 26.4185 0.5 26.75C0.5 27.0815 0.631696 27.3995 0.866116 27.6339C1.10054 27.8683 1.41848 28 1.75 28H31.75C32.0815 28 32.3995 27.8683 32.6339 27.6339C32.8683 27.3995 33 27.0815 33 26.75C33 26.4185 32.8683 26.1005 32.6339 25.8661C32.3995 25.6317 32.0815 25.5 31.75 25.5H28.0115C28.1154 25.2172 28.1849 24.9229 28.2185 24.6235L28.881 18H31.75C32.7442 17.9989 33.6974 17.6035 34.4004 16.9004C35.1035 16.1974 35.4989 15.2442 35.5 14.25V10.5C35.4989 9.50577 35.1035 8.55258 34.4004 7.84956C33.6974 7.14653 32.7442 6.75109 31.75 6.75ZM9.0125 25.5C8.70243 25.501 8.40314 25.3862 8.17327 25.1782C7.9434 24.9701 7.79949 24.6836 7.76975 24.375L5.7685 4.37575C5.75109 4.20188 5.7703 4.0263 5.82488 3.86031C5.87946 3.69432 5.96821 3.5416 6.0854 3.412C6.2026 3.28239 6.34564 3.17877 6.50532 3.10781C6.665 3.03685 6.83777 3.00013 7.0125 3H26.4875C26.6622 3.00012 26.8349 3.03681 26.9945 3.10772C27.1541 3.17863 27.2972 3.28218 27.4143 3.4117C27.5315 3.54123 27.6203 3.69386 27.6749 3.85977C27.7295 4.02568 27.7488 4.20119 27.7315 4.375L25.7308 24.3762C25.7007 24.6848 25.5566 24.971 25.3267 25.1788C25.0967 25.3867 24.7975 25.5012 24.4875 25.5H9.0125ZM33 14.25C32.9998 14.5815 32.868 14.8993 32.6337 15.1337C32.3993 15.368 32.0815 15.4998 31.75 15.5H29.1311L29.7561 9.25H31.75C32.0815 9.2502 32.3993 9.38196 32.6337 9.61634C32.868 9.85071 32.9998 10.1685 33 10.5V14.25Z"
                              fill="#F20587"
                            />
                          </svg>
                        </span>
                        <div class="media-body">
                          <h3 class="mb-0 text-black">
                            <span class="counter ms-0">56</span>
                          </h3>
                          <p class="mb-0 myTextSize">Riders Orders</p>
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
                          <h3 class="mb-0 text-black">
                            <span class="counter ms-0">56</span>
                          </h3>
                          <p class="mb-0 myTextSize">Successfully Delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div class="col-lg-12">
                  <br />
                  <div class="card" id="card">
                    <div class="card-header">
                      <h4 class="card-title">Riders Info</h4>
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
                              <th>order ID</th>
                              <th>Rider Name</th>
                              <th>Destination</th>
                              <th>Contact</th>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Mode</th>
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
                              <td>#001</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <img
                                    src="images/avatar/Mj.jpg"
                                    class="rounded-lg me-2"
                                    width="24"
                                    alt=""
                                  />{" "}
                                  <span class="w-space-no">Dr. Jackson</span>
                                </div>
                              </td>
                              <td>Sowutoum</td>
                              <td>0599999999</td>
                              <td>13:45 pm</td>
                              <td>09/08/2022</td>
                              <td>Car</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheckBox3"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheckBox3"
                                  ></label>
                                </div>
                              </td>
                              <td>#002</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <img
                                    src="images/avatar/Mj.jpg"
                                    class="rounded-lg me-2"
                                    width="24"
                                    alt=""
                                  />{" "}
                                  <span class="w-space-no">Dr. Jackson</span>
                                </div>
                              </td>
                              <td>Medina</td>
                              <td>0277777777</td>
                              <td>13:45 pm</td>
                              <td>09/08/2022</td>
                              <td>Motor Bike</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheckBox4"
                                    required=""
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheckBox4"
                                  ></label>
                                </div>
                              </td>
                              <td>#003</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <img
                                    src="images/avatar/Mj.jpg"
                                    class="rounded-lg me-2"
                                    width="24"
                                    alt=""
                                  />{" "}
                                  <span class="w-space-no">Dr. Jackson</span>
                                </div>
                              </td>
                              <td>Lapaz</td>
                              <td>0206666666</td>
                              <td>13:45 pm</td>
                              <td>09/08/2022</td>
                              <td>Car</td>
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
export default RecentRiders;
