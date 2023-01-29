import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class ApproveVendors extends React.Component {
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
                  <h3 className="font-w600 mb-0">Approve Vendors</h3>
                  <small className="mb-0">Welcome to add vendor's page!</small>
                </div>
              </div>
              <hr />

              <div className="row">
                <div class="col-xl-4 col-lg-4">
                  <div class="basic-form">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Shop Name</label>
                        <select class="default-select  form-control wide">
                          <option value=""></option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                  <div class="basic-form">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Year Joined</label>
                        <select class="default-select  form-control wide">
                          <option value=""></option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                  <div class="basic-form">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Search</label>
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
                    </form>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="basicModal">
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Vendor Details</h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form className="login-form mt-4 scroll" id="style">
                              <div className="row">
                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Full Name</h6>
                                    {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Fullname"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Email</h6>
                                    {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                    <input
                                      type="email"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Email"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Phone Number</h6>
                                    <img
                                      src="images/icons/phone.svg"
                                      className="fea icon-sm icons"
                                      id="okay"
                                      alt="phone"
                                    />
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="PhoneNumber"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">GPS Address</h6>
                                    {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="GpsAddress"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Gender</h6>
                                    {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                    <input
                                      type="email"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="gender"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Date of Birth</h6>
                                    {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Dob"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Shop Name</h6>
                                    {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="ShopName"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Shop Location</h6>
                                    {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="shoplocation"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">
                                      Shop Registration Details
                                    </h6>
                                    {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="ShopRegistration"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Address</h6>
                                    {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Address"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Location on Map</h6>
                                    {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="locationonMap"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">
                                      Number of Employees
                                    </h6>
                                    {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="NumberEmployees"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Next in Command</h6>
                                    {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="NextinCommand"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Manager’s Number</h6>
                                    {/* <img src="images/icons/hash.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="number"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="ManagerNumber"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-12">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Cover Photo</h6>
                                    {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="file"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Certificate"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-12">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Owner Ghana Card </h6>
                                    {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="file"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Certificate"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-12">
                                  <div class="form-group position-relative">
                                    <h6 className="size">
                                      Company's Certificate
                                    </h6>
                                    {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="file"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Certificate"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Username</h6>
                                    {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="text"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Username"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Password</h6>
                                    {/* <img src="images/icons/key.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <input
                                      type="password"
                                      class="form-control pl-5"
                                      placeholder=""
                                      name="Password"
                                      required=""
                                    />
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                {/* <div className="col-lg-12 mb-0">
                                                                <button onClick={() =>
                                                                    swal(
                                                                        "Good job!",
                                                                        "You clicked the button!",
                                                                        "success"
                                                                    )
                                                                } className="btn btn-block" id="login">Add Vendor</button>
                                                            </div> */}
                                {/* // <!--end col--> */}
                              </div>
                              {/* <!--end row--> */}
                            </form>
                          </div>
                          {/* <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <br />
                  <div class="card" id="card">
                    <div class="card-header">
                      {/* <h4 class="card-title"></h4> */}
                      <div class="header-left">
                        <h4>Pending Approvals</h4>
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
                              <th>#ID</th>
                              <th>Shop Name</th>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Action</th>
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
                              <td>542</td>
                              <td>
                                <span class="w-space-no">Adom Bakery</span>
                              </td>
                              <td>Daniel</td>
                              <td>Daniel@gmail.com</td>
                              <td>13/11/22</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <i class="fa fa-circle text-warning me-1"></i>
                                  Pending
                                </div>
                              </td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                    id="editIcon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                  >
                                    <i class="fas fa-eye"></i>
                                  </Link>
                                </div>
                              </td>
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
                              <td>589</td>
                              <td>
                                <span class="w-space-no">Adwepa Bakery</span>
                              </td>
                              <td>Priscilla</td>
                              <td>priscilla@yahoo.com</td>
                              <td>01/11/22</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <i class="fa fa-circle text-warning me-1"></i>{" "}
                                  Pending
                                </div>
                              </td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                    id="editIcon"
                                  >
                                    <i class="fas fa-eye"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="groupa-btn" style={{ float: "right" }}>
                    <button
                      onClick={() =>
                        swal({
                          title: "Are you sure?",
                          text: "Do you really want to decline the offer!",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            swal("Poof! Offer has been declined!", {
                              icon: "success",
                            });
                          } else {
                            swal("You cancelld to declined offer");
                          }
                        })
                      }
                      className="btn btn-danger btn-sm"
                    >
                      Decline
                    </button>

                    <button
                      onClick={() =>
                        swal("Good job!", "You clicked the button!", "success")
                      }
                      className="btn  btn-success btn-sm ml-1"
                    >
                      Approve
                    </button>
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
export default ApproveVendors;
