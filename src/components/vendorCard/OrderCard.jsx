import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import OrderModal from "./OrderModal";
// import OrderModal from "./OrderModal";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import swal from "sweetalert";

const OrderCard = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="me-auto d-none d-lg-block">
          <h3 className="text-dark font-w600 mb-0">{title}</h3>
          <p className="mb-0 fs-12">Here is your Confirmeded order list data</p>
        </div>

        <div className="col-12">
          <br />
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example5"
                  className=" table table-borderless display mb-4 dataTablesCard"
                >
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Location</th>
                      <th>Amount</th>
                      <th>Status Order</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#5552351</td>
                      <td class="w-space-no">26 March 2020, 12:42 AM</td>
                      <td>James WItcwicky</td>
                      <td>Corner Street 5th London</td>
                      <td>$164.52</td>
                      <td>
                        <span class="text-success w-space-no">
                          <b>Confirmed</b>{" "}
                        </span>
                      </td>
                      <td>
                        <div class="dropdown ms-auto text-right">
                          <div class="btn-link" data-bs-toggle="dropdown">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
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
                            <Link class="dropdown-item" to="#">
                              <i class="las la-check-square scale5 text-success me-2"></i>{" "}
                              Confirm Order
                            </Link>
                            <Link
                              onClick={handleShow}
                              class="dropdown-item"
                              to="#"
                            >
                              <i
                                class="fa fa-eye text-primary me-2 scale5"
                                aria-hidden="true"
                              ></i>
                              View Order
                            </Link>

                            {/* <OrderModal /> */}
                            <Link class="dropdown-item" to="#">
                              <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                              Denial Order
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#5552397</td>
                      <td class="w-space-no">26 March 2020, 12:42 AM</td>
                      <td>David Horison</td>
                      <td>981 St. John’s Road London</td>
                      <td>$24.55</td>
                      <td>
                        <span class="text-success w-space-no">
                          <b>Confirmed</b>{" "}
                        </span>
                      </td>
                      <td>
                        <div class="dropdown ms-auto text-right">
                          <div class="btn-link" data-bs-toggle="dropdown">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
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
                            <Link class="dropdown-item" to="#">
                              <i class="las la-check-square scale5 text-success me-2"></i>{" "}
                              Confirm Order
                            </Link>
                            <Link class="dropdown-item" to="#">
                              <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                              Denial Order
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#5552397</td>
                      <td class="w-space-no">26 March 2020, 12:42 AM</td>
                      <td>Rendy Greenlee</td>
                      <td>32 The Green London</td>
                      <td>$251.16</td>
                      <td>
                        <span class="text-success w-space-no">
                          <b>Confirmed</b>{" "}
                        </span>
                      </td>
                      <td>
                        <div class="dropdown ms-auto text-right">
                          <div class="btn-link" data-bs-toggle="dropdown">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
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
                            <Link class="dropdown-item" to="#">
                              <i class="las la-check-square scale5 text-success me-2"></i>{" "}
                              Confirm Order
                            </Link>
                            <Link class="dropdown-item" to="#">
                              <i class="las la-times-circle scale5 text-danger me-2"></i>{" "}
                              Denial Order
                            </Link>
                          </div>
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
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-1">Order ID: #21288381</label>
                    {/* <input type="text" className="form-control" name="name" /> */}
                  </div>

                  <div className="form-group">
                    <label>Customer Name: Kofi James</label>
                    {/* <input type="text" className="form-control" name="name" /> */}
                  </div>

                  <div className="form-group">
                    <label>Date: 21/10/2023</label>
                    {/* <select
                      type="select"
                      className="form-control"
                      name="phonenumber"
                    >
                      <option value="Anniversary">Anniversary</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Birthday">Special Celebration</option>
                      <option value="Birthday">Surprise</option>
                      <option value="Birthday">Gifts, Thank you</option>
                      <option value="Birthday">Valantine</option>
                      <option value="Birthday">Others</option>
                    </select> */}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Location: Accra New Town</label>
                    {/* <div id="multiselect">
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
                    </div> */}
                  </div>

                  <div className="form-group">
                    <label>Amount: Ghc 500.00</label>
                    <div id="multiselect">
                      {/* <DropdownMultiselect
                        options={[
                          "Free Candles",
                          "Plastic Knife",
                          "Chocolate",
                          "4",
                          "5",
                          "6",
                        ]}
                      /> */}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Status: False </label>
                    {/* <div className="custom-file"> */}
                    {/* <input type="file" className="custom-file-input" /> */}
                    {/* <label className="custom-file-label">Choose file</label> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/* <hr className="horizontalLine" />
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
                  Edit Product
                </button>
              </div> */}
            </form>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
      </>
    </div>
  );
};

export default OrderCard;
