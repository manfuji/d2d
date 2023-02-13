import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
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

        <div id="">
          <div className="content-body">
            {/* Row */}
            <div className="container-fluid">
              <div className="form-head d-flex mb-3 align-items-start">
                <div className="me-auto d-none d-lg-block">
                  <h3 className="font-w600 mb-0">Dashboard</h3>
                  <small className="mb-0">Welcome to Your Dashboard!</small>
                </div>
              </div>
              <hr />
              <div className="row">
                <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
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
                              d="M31.75 6.75H30.0064L30.2189 4.62238C30.2709 4.10111 30.2131 3.57473 30.0493 3.07716C29.8854 2.57959 29.6192 2.12186 29.2676 1.73348C28.9161 1.3451 28.4871 1.03468 28.0082 0.822231C27.5294 0.609781 27.0112 0.500013 26.4875 0.5H7.0125C6.48854 0.500041 5.9704 0.609864 5.49128 0.822391C5.01256 1.03492 4.58348 1.34543 4.23189 1.73392C3.88031 2.12241 3.61203 2.58026 3.45021 3.07795C3.28639 3.57564 3.22866 4.10212 3.28075 4.6235L5.2815 24.6224C5.31508 24.9222 5.38467 25.2168 5.48875 25.5H1.75C1.41848 25.5 1.10054 25.6317 0.866116 25.8661C0.631696 26.1005 0.5 26.4185 0.5 26.75C0.5 27.0815 0.631696 27.3995 0.866116 27.6339C1.10054 27.8683 1.41848 28 1.75 28H31.75C32.0815 28 32.3995 27.8683 32.6339 27.6339C32.8683 27.3995 33 27.0815 33 26.75C33 26.4185 32.8683 26.1005 32.6339 25.8661C32.3995 25.6317 32.0815 25.5 31.75 25.5H28.0115C28.1154 25.2172 28.1849 24.9229 28.2185 24.6235L28.881 18H31.75C32.7442 17.9989 33.6974 17.6035 34.4004 16.9004C35.1035 16.1974 35.4989 15.2442 35.5 12.25V10.5C35.4989 9.50577 35.1035 8.55258 34.4004 7.84956C33.6974 7.12653 32.7442 6.75109 31.75 6.75ZM9.0125 25.5C8.70243 25.501 8.40312 25.3862 8.17327 25.1782C7.9434 24.9701 7.79949 24.6836 7.76975 24.375L5.7685 4.37575C5.75109 4.20188 5.7703 4.0263 5.82488 3.86031C5.87946 3.69432 5.96821 3.5416 6.0854 3.412C6.2026 3.28239 6.34564 3.17877 6.50532 3.10781C6.665 3.03685 6.83777 3.00013 7.0125 3H26.4875C26.6622 3.00012 26.8349 3.03681 26.9945 3.10772C27.1541 3.17863 27.2972 3.28218 27.4123 3.4117C27.5315 3.54123 27.6203 3.69386 27.6749 3.85977C27.7295 4.02568 27.7488 4.20119 27.7315 4.375L25.7308 24.3762C25.7007 24.6848 25.5566 24.971 25.3267 25.1788C25.0967 25.3867 24.7975 25.5012 24.4875 25.5H9.0125ZM33 12.25C32.9998 12.5815 32.868 12.8993 32.6337 15.1337C32.3993 15.368 32.0815 15.4998 31.75 15.5H29.1311L29.7561 9.25H31.75C32.0815 9.2502 32.3993 9.38196 32.6337 9.61634C32.868 9.85071 32.9998 10.1685 33 10.5V12.25Z"
                              fill="#F20587"
                            />
                          </svg>
                        </span>
                        <div class="media-body">
                          <h3 class="mb-0 text-black">
                            <span class="counter ms-0">56</span>
                          </h3>
                          <p class="mb-0 myTextSize">Total Sales for Today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
                  <div class="widget-stat card">
                    <div class="card-body p-4">
                      <div class="media ai-icon d-flex">
                        <span class="me-3 bgl-primary text-primary">
                          <span className="fs-24 font-w400">₵</span>
                        </span>
                        <div class="media-body">
                          <h3 class="mb-0 text-black">
                            <span class="counter ms-0">12</span>k
                          </h3>
                          <p class="mb-0 myTextSize">Total Orders for Today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
                  <div class="widget-stat card">
                    <div class="card-body p-4">
                      <div class="media ai-icon d-flex">
                        <span class="me-3 bgl-primary text-primary">
                          {/* <!-- <i class="ti-user"></i> --> */}
                          <svg
                            width={32}
                            height={25}
                            viewBox="0 0 32 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 30.5H22.75C23.7442 30.4989 24.6974 30.1035 25.4004 29.4004C26.1035 28.6974 26.4989 27.7442 26.5 26.75V16.75C26.5 16.4185 26.3683 16.1005 26.1339 15.8661C25.8995 15.6317 25.5815 15.5 25.25 15.5C24.9185 15.5 24.6005 15.6317 24.3661 15.8661C24.1317 16.1005 24 16.4185 24 16.75V26.75C23.9997 27.0812 23.8679 27.3992 23.6336 27.6336C23.3992 27.8679 23.0812 27.9997 22.75 28H4C3.66857 27.9997 3.3508 27.8679 3.11645 27.6336C2.88209 27.3992 2.7503 27.0812 2.75 26.75V9.25C2.7503 8.91857 2.88209 8.6008 3.11645 8.36645C3.3508 8.13209 3.66857 8.0003 4 8H15.25C15.5815 8 15.8995 7.8683 16.1339 7.63388C16.3683 7.39946 16.5 7.08152 16.5 6.75C16.5 6.41848 16.3683 6.10054 16.1339 5.86612C15.8995 5.6317 15.5815 5.5 15.25 5.5H4C3.00577 5.50109 2.05258 5.89653 1.34956 6.59956C0.646531 7.30258 0.251092 8.25577 0.25 9.25V26.75C0.251092 27.7442 0.646531 28.6974 1.34956 29.4004C2.05258 30.1035 3.00577 30.4989 4 30.5Z"
                              fill="#F20587"
                            />
                            <path
                              d="M25.25 0.5C24.0139 0.5 22.8055 0.866556 21.7777 1.55331C20.7499 2.24007 19.9488 3.21619 19.4758 4.35823C19.0027 5.50027 18.8789 6.75693 19.1201 7.96931C19.3613 9.1817 19.9565 10.2953 20.8306 11.1694C21.7047 12.0435 22.8183 12.6388 24.0307 12.8799C25.2431 13.1211 26.4997 12.9973 27.6418 12.5242C28.7838 12.0512 29.7599 11.2501 30.4467 10.2223C31.1334 9.19451 31.5 7.98613 31.5 6.75C31.498 5.093 30.8389 3.50442 29.6673 2.33274C28.4956 1.16106 26.907 0.501952 25.25 0.5ZM25.25 10.5C24.5083 10.5 23.7833 10.2801 23.1666 9.86801C22.5499 9.45596 22.0693 8.87029 21.7855 8.18506C21.5016 7.49984 21.4274 6.74584 21.5721 6.01841C21.7167 5.29098 22.0739 4.6228 22.5983 4.09835C23.1228 3.5739 23.791 3.21675 24.5184 3.07206C25.2458 2.92736 25.9998 3.00162 26.6851 3.28545C27.3703 3.56928 27.9559 4.04993 28.368 4.66661C28.7801 5.2833 29 6.00832 29 6.75C28.9989 7.74423 28.6035 8.69742 27.9004 9.40044C27.1974 10.1035 26.2442 10.4989 25.25 10.5Z"
                              fill="#F20587"
                            />
                            <path
                              d="M6.5 13H12.75C13.0815 13 13.3995 12.8683 13.6339 12.6339C13.8683 12.3995 12 12.0815 12 11.75C12 11.4185 13.8683 11.1005 13.6339 10.8661C13.3995 10.6317 13.0815 10.5 12.75 10.5H6.5C6.16848 10.5 5.85054 10.6317 5.61612 10.8661C5.3817 11.1005 5.25 11.4185 5.25 11.75C5.25 12.0815 5.3817 12.3995 5.61612 12.6339C5.85054 12.8683 6.16848 13 6.5 13Z"
                              fill="#F20587"
                            />
                            <path
                              d="M5.25 16.75C5.25 17.0815 5.3817 17.3995 5.61612 17.6339C5.85054 17.8683 6.16848 18 6.5 18H17.75C18.0815 18 18.3995 17.8683 18.6339 17.6339C18.8683 17.3995 19 17.0815 19 16.75C19 16.4185 18.8683 16.1005 18.6339 15.8661C18.3995 15.6317 18.0815 15.5 17.75 15.5H6.5C6.16848 15.5 5.85054 15.6317 5.61612 15.8661C5.3817 16.1005 5.25 16.4185 5.25 16.75Z"
                              fill="#F20587"
                            />
                          </svg>
                        </span>
                        <div class="media-body">
                          <h3 class="mb-0 text-black">
                            <span class="counter ms-0">20</span>
                          </h3>
                          <p class="mb-0 myTextSize">Total Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-12">
                  <div class="card">
                    <div class="card-header border-0 pb-0 d-sm-flex flex-wrap d-block">
                      <div class="mb-3">
                        <h6 class=" mb-1">Orders Summary</h6>
                        <small class="mb-0 textSmall">
                          Lorem ipsum dolor sit amet, consectetur
                        </small>
                      </div>
                      <div class="card-action card-tabs mb-2">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <Link
                              class="nav-link active textSmallYeah"
                              data-bs-toggle="tab"
                              to="#Monthly"
                              role="tab"
                            >
                              Monthly
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link
                              class="nav-link textSmallYeah"
                              data-bs-toggle="tab"
                              to="#Weekly"
                              role="tab"
                            >
                              Weekly
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link
                              class="nav-link textSmallYeah"
                              data-bs-toggle="tab"
                              to="#Today"
                              role="tab"
                            >
                              Today
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-body tab-content orders-summary pt-3">
                      <div class="tab-pane fade show active" id="Monthly">
                        <div class="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
                          <Link
                            to="#"
                            class="btn fs-22 text-white py-1 btn-success btn-sm px-4 me-3"
                            id="btn25"
                          >
                            25
                          </Link>
                          <h4 class="mb-0 newOrderText">
                            New Orders{" "}
                            <i class="fa fa-circle text-warning ms-1 fs-15"></i>
                          </h4>
                          <Link to="#" class="ms-auto text-primary font-w500">
                            Manage orders <i class="ti-angle-right ms-1"></i>
                          </Link>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-1 rounded-xl">
                              <h5 class="fs-32 font-w600 counter">25</h5>
                              <p class="fs-16 mb-0 textSmallYeah">
                                On Delivered
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-1 rounded-xl">
                              <h5 class="fs-32 font-w600 counter">60</h5>
                              <p class="fs-16 mb-0 textSmallYeah">Delivered</p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-1 rounded-xl">
                              <h5 class="fs-32 font-w600 counter">7</h5>
                              <p class="fs-16 mb-0 textSmallYeah">Canceled</p>
                            </div>
                          </div>
                        </div>
                        <div class="widget-timeline-icon">
                          <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                              <div id="chart" class="d-inline-block"></div>
                            </div>
                            <div class="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cakes (24%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-warning progress-animated"
                                    style={{ width: "85%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  25
                                </span>
                              </div>
                              <div class="d-flex align-items-center  mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cupcakes (41%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-success progress-animated"
                                    style={{ width: "70%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  60
                                </span>
                              </div>
                              <div class="d-flex align-items-center">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cheesecakes (15%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-dark progress-animated"
                                    style={{ width: "30%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  07
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="Weekly">
                        <div class="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
                          <Link
                            to="#"
                            class="btn fs-22 py-1 btn-success px-4 me-3"
                          >
                            25
                          </Link>
                          <h4 class="mb-0">
                            New Orders{" "}
                            <i class="fa fa-circle text-success ms-1 fs-15"></i>
                          </h4>
                          <Link to="#" class="ms-auto text-primary font-w500">
                            Manage orders <i class="ti-angle-right ms-1"></i>
                          </Link>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">25</h2>
                              <p class="fs-16 mb-0">On Delivery</p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">60</h2>
                              <p class="fs-16 mb-0">Delivered</p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">7</h2>
                              <p class="fs-16 mb-0">Canceled</p>
                            </div>
                          </div>
                        </div>
                        <div class="widget-timeline-icon">
                          <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                              <div id="chart2" class="d-inline-block"></div>
                            </div>
                            <div class="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cakes (24%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-warning progress-animated"
                                    style={{ width: "85%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  25
                                </span>
                              </div>
                              <div class="d-flex align-items-center  mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cupcakes (41%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-success progress-animated"
                                    style={{ width: "70%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  60
                                </span>
                              </div>
                              <div class="d-flex align-items-center">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cheesecakes (15%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-dark progress-animated"
                                    style={{ width: "30%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  07
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="Today">
                        <div class="d-flex flex-wrap order-manage p-3 align-items-center mb-4">
                          <Link
                            to="#"
                            class="btn fs-22 py-1 btn-success px-4 me-3"
                          >
                            25
                          </Link>
                          <h4 class="mb-0">
                            New Orders{" "}
                            <i class="fa fa-circle text-success ms-1 fs-15"></i>
                          </h4>
                          <Link to="#" class="ms-auto text-primary font-w500">
                            Manage orders <i class="ti-angle-right ms-1"></i>
                          </Link>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">25</h2>
                              <p class="fs-16 mb-0">On Delivery</p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">60</h2>
                              <p class="fs-16 mb-0">Delivered</p>
                            </div>
                          </div>
                          <div class="col-sm-4 mb-4">
                            <div class="border px-3 py-3 rounded-xl">
                              <h2 class="fs-32 font-w600 counter">7</h2>
                              <p class="fs-16 mb-0">Canceled</p>
                            </div>
                          </div>
                        </div>
                        <div class="widget-timeline-icon">
                          <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2 col-xxl-4 col-sm-3 col-md-3 my-2 text-center text-sm-left">
                              <div id="chart3" class="d-inline-block"></div>
                            </div>
                            <div class="col-xl-9 col-lg-10 col-xxl-8 col-sm-9 col-md-9">
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cakes (24%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-warning progress-animated"
                                    style={{ width: "85%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  25
                                </span>
                              </div>
                              <div class="d-flex align-items-center  mb-3">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cupcakes (41%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-success progress-animated"
                                    style={{ width: "70%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  60
                                </span>
                              </div>
                              <div class="d-flex align-items-center">
                                <p class="mb-0 fs-12 me-2 col-4 col-xxl-5 px-0">
                                  Cheesecakes (15%)
                                </p>
                                <div
                                  class="progress mb-0"
                                  style={{ height: 8, width: "100%" }}
                                >
                                  <div
                                    class="progress-bar bg-dark progress-animated"
                                    style={{ width: "30%", height: 8 }}
                                    role="progressbar"
                                  >
                                    <span class="sr-only">60% Complete</span>
                                  </div>
                                </div>
                                <span class="pull-right ms-auto col-1 col-xxl-2 px-0 text-right">
                                  07
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-12">
                  <div class="card">
                    <div class="card-header border-0 pb-0 d-sm-flex d-block">
                      <div>
                        <h6 class=" mb-1">Incoming Orders</h6>
                        <small class="mb-0 textSmall">
                          This section of your page shows your incoming orders
                        </small>
                      </div>
                      <select class="form-control style-1 default-select  mt-1 mt-sm-0 textSmallYeah">
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Daily</option>
                      </select>
                    </div>
                    <div class="card-body revenue-chart px-3">
                      <div class="card-body">
                        <div
                          id="DZ_W_TimeLine11"
                          class="widget-timeline dz-scroll style-1"
                        >
                          <ul class="timeline">
                            <li className="shadow-sm">
                              <div class="timeline-badge primary"></div>
                              <Link class="timeline-panel text-muted" href="#">
                                <span>10 minutes ago</span>
                                <h6 class="mb-0">
                                  New order placed{" "}
                                  <strong class="text-primary">#0001.</strong>
                                </h6>
                                <p class="mb-0">Cheesecake</p>
                              </Link>
                            </li>
                            <li className="shadow-sm">
                              <div class="timeline-badge info"></div>
                              <Link class="timeline-panel text-muted" href="#">
                                <span>20 minutes ago</span>
                                <h6 class="mb-0">
                                  New order placed{" "}
                                  <strong class="text-primary">#0003.</strong>
                                </h6>
                                <p class="mb-0">Brownies</p>
                              </Link>
                            </li>
                            <li className="shadow-sm">
                              <div class="timeline-badge danger"></div>
                              <Link class="timeline-panel text-muted" href="#">
                                <span>15 minutes ago</span>
                                <h6 class="mb-0">
                                  New order placed{" "}
                                  <strong class="text-primary">#0006.</strong>
                                </h6>
                                <p class="mb-0">Cupcakes</p>
                              </Link>
                            </li>
                            <li className="shadow-sm">
                              <div class="timeline-badge success"></div>
                              <Link class="timeline-panel text-muted" href="#">
                                <span>15 minutes ago</span>
                                <h6 class="mb-0">
                                  New order placed{" "}
                                  <strong class="text-primary">#0002.</strong>
                                </h6>
                                <p class="mb-0">Pastries</p>
                              </Link>
                            </li>
                          </ul>
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
export default Dashboard;
