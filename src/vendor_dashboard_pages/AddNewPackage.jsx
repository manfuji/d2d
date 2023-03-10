import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "../Vendor-dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/utils/Loader";
import { useSelector } from "react-redux";

const AddNewPackage = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user.user.id);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.access}`,
    },
  };
  const userId = user.user.id;
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.is_vendor) {
      return navigate("/");
    }
  }, [user]);
  const initialstate = {
    package_name: "",
    price: 0,
    add_ons: "",
    description: "",
    shop: userId,
    category: 0,
    note: "",
  };
  const [formData, setFormData] = useState(initialstate);

  const onchangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      package_name: formData.package_name,
      price: Number(formData.price),
      add_ons: formData.add_ons,
      description: formData.description,
      shop: userId,
      category: Number(formData.category),
    };
    console.log(body);

    axios
      .post(process.env.REACT_APP_BASE_URL + "/shop/package/", body, config)
      .then((response) => {
        // setLoading(false);
        swal("Submitted!", "packages created!", "success");

        setCreated(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // vendors
    axios
      .get(process.env.REACT_APP_BASE_URL + "/shop/package-category")
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(process.env.REACT_APP_BASE_URL + "/shop/packages/")
      .then((response) => {
        setPackages(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [created]);

  if (loading) return <Loader />;
  return (
    <div className="App">
      <div>
        <div className="content-body">
          {/* Row */}
          <div className="container-fluid">
            <div className="form-head d-flex mb-3 align-items-start">
              <div className="me-auto d-none d-lg-block">
                <h3 className="font-w600 mb-0">Add New Packages</h3>
                <small className="mb-0">List of packages you've added!</small>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="">
                <button
                  className="btn btn-primary btn-sm"
                  id="filter"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                  style={{ width: "14%" }}
                >
                  Add Package
                  <img src="images/icons/plus.svg" width={20} alt="icons" />
                </button>
              </div>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModalCenter">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Add New Package</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="mb-1 ">
                            <h6 className="text-muted">Package Name:</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="package_name"
                            value={formData.package_name}
                            onChange={onchangeHandler}
                          />
                          {/* {errors.email && <div className="text-danger fs-12">{errors.email}</div>} */}
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <label className="mb-1 ">
                              <h6 className="text-muted">Category</h6>
                            </label>
                            <select
                              type="select"
                              className="form-control"
                              name="category"
                              value={formData.category}
                              onChange={onchangeHandler}
                            >
                              <option selected>Select</option>
                              {category.map((category) => (
                                <>
                                  <option value={category.id} key={category.id}>
                                    {category.name}
                                  </option>
                                </>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mb-1 ">
                            <h6 className="text-muted">add ons</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="add_ons"
                            value={formData.add_ons}
                            onChange={onchangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-1 ">
                            <h6 className="text-muted">Price</h6>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={formData.price}
                            onChange={onchangeHandler}
                          />
                        </div>
                        <div className="form-group">
                          <label className="fs-12 fw500">Special Notes: </label>
                          <textarea
                            className="form-control"
                            placeholder="Your message goes here ..."
                            name="note"
                            value={formData.note}
                            onChange={onchangeHandler}
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="fs-12 fw500">Description: </label>
                          <textarea
                            className="form-control"
                            placeholder="Your description goes here ..."
                            value={formData.description}
                            name="description"
                            onChange={onchangeHandler}
                          ></textarea>
                        </div>

                        <div className="sweetalert mt-5 ">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block sweet-success"
                            id="filter"
                          >
                            Add package
                          </button>
                        </div>
                        {/* <hr className="horizontalLine" /> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Modal --> */}
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
};
export default AddNewPackage;
