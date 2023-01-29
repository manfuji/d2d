import React from "react";
import swal from "sweetalert";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import "../Vendor-dashboard.css";
import { Link } from "react-router-dom";

class AddOffer extends React.Component {
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
                  <h3 className="font-w600 mb-0">Add New Offer</h3>
                  <small className="mb-0">List of offers you've added!</small>
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
                <div className="">
                  <small className="mb-0">Add package as Offer:</small>
                  <button
                    className="btn btn-primary btn-sm ml-1"
                    id="filter"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    style={{ width: "14%" }}
                  >
                    Add Offer
                    <img src="images/icons/plus.svg" width={20} alt="icons" />
                  </button>

                  <small className="mb-0 ml-3">Add Product as Offer:</small>
                  <button
                    className="btn btn-primary btn-sm ml-1"
                    id="filter"
                    data-bs-toggle="modal"
                    data-bs-target="#basicModal"
                    style={{ width: "14%" }}
                  >
                    Add Offer
                    <img src="images/icons/plus.svg" width={20} alt="icons" />
                  </button>
                  {/* <br /> */}
                  <hr />
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModalCenter">
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add New Offer</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label>Package Name:</label>
                                <div id="multiselect">
                                  <DropdownMultiselect
                                    options={[
                                      "Support",
                                      "Sales",
                                      "Admin System",
                                      "4",
                                      "5",
                                      "6",
                                    ]}
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <label className="mb-1">Offer Price:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="GH¢ 250"
                                />
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="form-group">
                                <label className="mb-1">Price:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="GH¢ 450"
                                />
                              </div>

                              <div class="form-group">
                                <div class="example">
                                  <p class="mb-1">Date Range Pick</p>
                                  <input
                                    class="form-control input-daterange-datepicker"
                                    type="text"
                                    name="daterange"
                                    value="01/01/2015 - 01/31/2015"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr className="horizontalLine" />
                          <div className="sweetalert  ">
                            <button
                              onClick={() =>
                                swal(
                                  "Good job!",
                                  "Package has been added successfully!",
                                  "success"
                                )
                              }
                              className="btn btn-primary btn-block sweet-success"
                              id="filter"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="basicModal">
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add New Product</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label>Package Name:</label>
                                <div id="multiselect">
                                  <DropdownMultiselect
                                    options={[
                                      "Support",
                                      "Sales",
                                      "Admin System",
                                      "4",
                                      "5",
                                      "6",
                                    ]}
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <label className="mb-1">Offer Price:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="GH¢ 250"
                                />
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="form-group">
                                <label className="mb-1">Price:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="GH¢ 450"
                                />
                              </div>

                              <div class="form-group">
                                <div class="example">
                                  <p class="mb-1">Date Range Pick</p>
                                  <input
                                    class="form-control input-daterange-datepicker"
                                    type="text"
                                    name="daterange"
                                    value="01/01/2015 - 01/31/2015"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr className="horizontalLine" />
                          <div className="sweetalert  ">
                            <button
                              onClick={() =>
                                swal(
                                  "Good job!",
                                  "Package has been updated successfully!",
                                  "success"
                                )
                              }
                              className="btn btn-primary btn-block sweet-success"
                              id="filter"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-sm-6">
                  <div class="card" id="card1">
                    <div class="card-body card1">
                      <div class="new-arrival-product">
                        <div class="new-arrivals-img-contnent">
                          <img
                            class="img-fluid"
                            src="images/card/1.jpg"
                            alt="package"
                          />
                        </div>
                        <div class="new-arrival-content text-center mt-3">
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fs-10 text-left">
                                  Name: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Category: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Price: GH₵ 250
                                </td>
                                <td>
                                  <div class="dropdown ms-auto text-right">
                                    <div
                                      class="btn-link"
                                      data-bs-toggle="dropdown"
                                    >
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                          ></rect>
                                          <circle
                                            fill="#000000"
                                            cx="5"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="12"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="19"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                        </g>
                                      </svg>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <Link
                                        class="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#basicModal"
                                        to="#"
                                      >
                                        <i class="las la-check-square scale5 text-secondary me-2"></i>{" "}
                                        Edit
                                      </Link>
                                      <Link
                                        class="dropdown-item sweet-confirm"
                                        onClick={() =>
                                          swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this package!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          }).then((willDelete) => {
                                            if (willDelete) {
                                              swal(
                                                "Poof! Your package has been deleted!",
                                                {
                                                  icon: "success",
                                                }
                                              );
                                            } else {
                                              swal("Your package is safe!");
                                            }
                                          })
                                        }
                                        to="#"
                                      >
                                        <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-6">
                  <div class="card" id="card1">
                    <div class="card-body card1">
                      <div class="new-arrival-product">
                        <div class="new-arrivals-img-contnent">
                          <img
                            class="img-fluid"
                            src="images/card/1.jpg"
                            alt="package"
                          />
                        </div>
                        <div class="new-arrival-content text-center mt-3">
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fs-10 text-left">
                                  Name: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Category: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Price: GH₵ 250
                                </td>
                                <td>
                                  <div class="dropdown ms-auto text-right">
                                    <div
                                      class="btn-link"
                                      data-bs-toggle="dropdown"
                                    >
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                          ></rect>
                                          <circle
                                            fill="#000000"
                                            cx="5"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="12"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="19"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                        </g>
                                      </svg>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <Link
                                        class="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#basicModal"
                                        to="#"
                                      >
                                        <i class="las la-check-square scale5 text-secondary me-2"></i>{" "}
                                        Edit
                                      </Link>
                                      <Link
                                        class="dropdown-item sweet-confirm"
                                        onClick={() =>
                                          swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this package!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          }).then((willDelete) => {
                                            if (willDelete) {
                                              swal(
                                                "Poof! Your package has been deleted!",
                                                {
                                                  icon: "success",
                                                }
                                              );
                                            } else {
                                              swal("Your package is safe!");
                                            }
                                          })
                                        }
                                        to="#"
                                      >
                                        <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-6">
                  <div class="card" id="card1">
                    <div class="card-body card1">
                      <div class="new-arrival-product">
                        <div class="new-arrivals-img-contnent">
                          <img
                            class="img-fluid"
                            src="images/card/1.jpg"
                            alt="package"
                          />
                        </div>
                        <div class="new-arrival-content text-center mt-3">
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fs-10 text-left">
                                  Name: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Category: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Price: GH₵ 250
                                </td>
                                <td>
                                  <div class="dropdown ms-auto text-right">
                                    <div
                                      class="btn-link"
                                      data-bs-toggle="dropdown"
                                    >
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                          ></rect>
                                          <circle
                                            fill="#000000"
                                            cx="5"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="12"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="19"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                        </g>
                                      </svg>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <Link
                                        class="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#basicModal"
                                        to="#"
                                      >
                                        <i class="las la-check-square scale5 text-secondary me-2"></i>{" "}
                                        Edit
                                      </Link>
                                      <Link
                                        class="dropdown-item sweet-confirm"
                                        onClick={() =>
                                          swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this package!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          }).then((willDelete) => {
                                            if (willDelete) {
                                              swal(
                                                "Poof! Your package has been deleted!",
                                                {
                                                  icon: "success",
                                                }
                                              );
                                            } else {
                                              swal("Your package is safe!");
                                            }
                                          })
                                        }
                                        to="#"
                                      >
                                        <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-6">
                  <div class="card" id="card1">
                    <div class="card-body card1">
                      <div class="new-arrival-product">
                        <div class="new-arrivals-img-contnent">
                          <img
                            class="img-fluid"
                            src="images/card/1.jpg"
                            alt="package"
                          />
                        </div>
                        <div class="new-arrival-content text-center mt-3">
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fs-10 text-left">
                                  Name: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Category: Cup Cakes
                                </td>
                              </tr>
                              <tr>
                                <td className="fs-10 text-left">
                                  Price: GH₵ 250
                                </td>
                                <td>
                                  <div class="dropdown ms-auto text-right">
                                    <div
                                      class="btn-link"
                                      data-bs-toggle="dropdown"
                                    >
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                      >
                                        <g
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                          ></rect>
                                          <circle
                                            fill="#000000"
                                            cx="5"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="12"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                          <circle
                                            fill="#000000"
                                            cx="19"
                                            cy="12"
                                            r="2"
                                          ></circle>
                                        </g>
                                      </svg>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <Link
                                        class="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#basicModal"
                                        to="#"
                                      >
                                        <i class="las la-check-square scale5 text-secondary me-2"></i>{" "}
                                        Edit
                                      </Link>
                                      <Link
                                        class="dropdown-item sweet-confirm"
                                        onClick={() =>
                                          swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this package!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          }).then((willDelete) => {
                                            if (willDelete) {
                                              swal(
                                                "Poof! Your package has been deleted!",
                                                {
                                                  icon: "success",
                                                }
                                              );
                                            } else {
                                              swal("Your package is safe!");
                                            }
                                          })
                                        }
                                        to="#"
                                      >
                                        <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
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
export default AddOffer;
