import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SuperAdmin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../components/utils/Loader";

const SuperadminDashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const [users, setUsers] = useState([]);
  const [riders, setRiders] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.access}`,
      },
    };
    // users
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/user", config)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
    // riders
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/rider", config)
      .then((response) => {
        setRiders(response.data);
      })
      .catch((err) => console.log(err));

    // vendors
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/vendors", config)
      .then((response) => {
        setVendors(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);
  console.log(users, riders, vendors);

  if (loading) return <Loader />;
  return (
    <div className="App">
      <div>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-ticket-detailed-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z" />
                        </svg>{" "}
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">56</span>
                        </h3>
                        <p class="mb-0 myTextSize">Ticket Waiting</p>
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
                        <i class="fa fa-motorcycle fs-24"></i>
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">12</span>
                        </h3>
                        <p class="mb-0 myTextSize">Awaiting Riders</p>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-graph-up-arrow"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                          />
                        </svg>
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">20</span>
                        </h3>
                        <p class="mb-0 myTextSize">Reports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-xl-6 col-lg-6" id="hidden">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Donught Chart</h4>
                      </div>
                      <div class="card-body">
                        <div
                          id="morris_donught"
                          class="morris_chart_height"
                        ></div>
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
                      <div class="card-header">
                        <h4 class="card-title">Bar Chart</h4>
                      </div>
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
                        <div
                          id="line_chart_2"
                          class="morris_chart_height"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6" id="hidden">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Bar Chart</h4>
                      </div>
                      <div class="card-body">
                        <div
                          id="morris_bar_stalked"
                          class="morris_chart_height"
                        ></div>
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
              <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-6">
                <div class="widget-stat card">
                  <div class="card-body p-4">
                    <div class="media ai-icon d-flex">
                      <span class="me-3 bgl-primary text-primary">
                        <i class="fa fa-users fs-24"></i>
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">{users?.length}</span>
                        </h3>
                        <p class="mb-0 myTextSize">Total Users</p>
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
                        <i class="fa fa-users fs-24"></i>
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">{vendors?.length}</span>
                        </h3>
                        <p class="mb-0 myTextSize">Total Vendors</p>
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
                        <i class="fa fa-motorcycle fs-24"></i>
                      </span>
                      <div class="media-body">
                        <h3 class="mb-0 text-black">
                          <span class="counter ms-0">{riders.length}</span>
                        </h3>
                        <p class="mb-0 myTextSize">Total Riders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-xl-4 col-lg-4">
                <div class="basic-form">
                  <form>
                    <div class="mb-3">
                      <label class="form-label"></label>
                      <select class="default-select  form-control wide">
                        <option>Vendor</option>
                        <option>Rider</option>
                        <option>User</option>
                        <option>4</option>
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
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vendors &&
                            vendors?.map((vendor) => (
                              <>
                                <tr key={vendor?.id}>
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
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <img
                                        src="images/avatar/Mj.jpg"
                                        class="rounded-lg me-2"
                                        width="24"
                                        alt=""
                                      />{" "}
                                      <span class="w-space-no">
                                        {vendor.user.username}
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    {" "}
                                    {vendor.user.phone_number
                                      ? vendor.user.phone_number
                                      : "No number"}
                                  </td>
                                  <td> {vendor.user.email}</td>
                                  <td>
                                    <div class="d-flex">
                                      <Link
                                        to="#"
                                        class="btn btn-primary shadow btn-xs sharp me-1 sweet-confirm"
                                        id="editIcon"
                                      >
                                        <i class="fas fa-eye"></i>
                                      </Link>
                                      <Link
                                        to="#"
                                        class="btn btn-danger shadow btn-xs sharp sweet-confirm"
                                      >
                                        <i class="fa fa-trash"></i>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ))}
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
};
export default SuperadminDashboard;
