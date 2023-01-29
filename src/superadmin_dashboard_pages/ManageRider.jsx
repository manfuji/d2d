import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class ManageRider extends React.Component {
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
                  <h3 className="font-w600 mb-0">Manage Riders</h3>
                  <small className="mb-0">Welcome to manage user's page!</small>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="">
                  {/* <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" id="filter" style={{ width: "15%", float: "right" }}>New Vendor <img src="images/icons/plus.svg" width={20} alt="icons" /></button> */}

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
                            <h5 class="modal-title">Rider Details</h5>
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

                                <div className="col-lg-12 mb-0">
                                  <button
                                    onClick={() =>
                                      swal(
                                        "Good job!",
                                        "You clicked the button!",
                                        "success"
                                      )
                                    }
                                    className="btn btn-block"
                                    id="login"
                                  >
                                    Update Rider
                                  </button>
                                </div>
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
                              <th>#ID</th>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Contact</th>
                              <th>GPS Address</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>542</td>
                              <td>
                                <span class="w-space-no">Adom Grace</span>
                              </td>
                              <td>adomgrace@hotcake.com</td>
                              <td>0277004028</td>
                              <td>EN-199-2934</td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                    id="editIcon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                  >
                                    <i class="fas fa-pencil-alt"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    onClick={() =>
                                      swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      }).then((willDelete) => {
                                        if (willDelete) {
                                          swal(
                                            "Poof! Vendor has been deleted!",
                                            {
                                              icon: "success",
                                            }
                                          );
                                        } else {
                                          swal("Your file is safe!");
                                        }
                                      })
                                    }
                                    class="btn btn-danger shadow btn-xs sharp sweet-confirm"
                                  >
                                    <i class="fa fa-trash"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>589</td>
                              <td>
                                <span class="w-space-no">Maame Yaa</span>
                              </td>
                              <td>yaamaame@gmail.com</td>
                              <td>0266666666</td>
                              <td>EN-345-4689</td>
                              <td>
                                <div class="d-flex">
                                  <Link
                                    to="#"
                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                    id="editIcon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                  >
                                    <i class="fas fa-pencil-alt"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    onClick={() =>
                                      swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      }).then((willDelete) => {
                                        if (willDelete) {
                                          swal(
                                            "Poof! Your imaginary file has been deleted!",
                                            {
                                              icon: "success",
                                            }
                                          );
                                        } else {
                                          swal("Your imaginary file is safe!");
                                        }
                                      })
                                    }
                                    class="btn btn-danger shadow btn-xs sharp sweet-confirm"
                                  >
                                    <i class="fa fa-trash"></i>
                                  </Link>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ManageRider;
