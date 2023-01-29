import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class AddProduct extends React.Component {
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
                  <h3 className="font-w600 mb-0">Products</h3>
                  <small className="mb-0">Welcome to Your Products List!</small>
                </div>

                <div className="dropdown custom-dropdown" id="filter">
                  <div
                    class="btn btn-sm btn-primary light d-flex align-items-center svg-btn"
                    data-bs-toggle="dropdown"
                  >
                    <div class="text-start ms-3">
                      <span className="d-block fs-16">In Stock</span>
                      <small className="d-block fs-13">Products in Stock</small>
                    </div>
                    <i class="fa fa-angle-down scale5  ms-3"></i>
                  </div>
                  <div class="dropdown-menu dropdown-menu-right">
                    <Link class="dropdown-item" to="#">
                      Yes
                    </Link>
                    <Link class="dropdown-item" to="#">
                      No
                    </Link>
                  </div>
                </div>
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
                          <p class="mb-0 myTextSize">Total Menus</p>
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
                            <span class="counter ms-0">12</span>k
                          </h3>
                          <p class="mb-0 myTextSize">Total Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
                <div class="me-auto d-none d-lg-block">
                  {/* <h2 class="text-title text-primary font-w500 mb-1">Reviews</h2> */}
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="#" class="text-primary">
                        Recently Added Products
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
              {/* <hr /> */}
              <div class="row">
                <div class="col-md-12">
                  <div class="widget-carousel owl-carousel">
                    <div class="items">
                      <div class="bootstrap-media card p-4">
                        <div class="media mb-4 d-flex align-items-center">
                          <Link to="ecom-product-detail.html">
                            <img
                              class="me-3 img-fluid rounded-xl"
                              width="94"
                              src="images/dish/pic1.jpg"
                              alt="DexignZone"
                            />
                          </Link>
                          <div class="media-body">
                            <h5 class="mt-0 mb-3 fs-13">
                              <Link
                                class="text-black"
                                to="ecom-product-detail.html"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small class="mb-0">
                              <Link class="text-primary" to="#">
                                BURGER
                              </Link>
                            </small>
                          </div>
                        </div>
                        <p class="f-13 text-black mb-4">
                          A very fine addition to the not over plentiful supply
                          of good restaurants in this part of west London.
                        </p>
                        <div class="reviewer-box">
                          <div class="media d-flex align-items-center">
                            {/* <img class="me-3 img-fluid rounded" width="85" src="images/avatar/1.jpg" alt="DexignZone" /> */}
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-white fs-13">Cakes</h4>
                              <small class="mb-0 text-light fs-13">Cakes</small>
                            </div>
                            <div class="star-review d-flex">
                              <i class="fa fa-star text-orange fs-13"></i>
                              <span class="ms-2 fs-13">4.2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="items">
                      <div class="bootstrap-media card p-4">
                        <div class="media mb-4 d-flex align-items-center">
                          <Link to="ecom-product-detail.html">
                            <img
                              class="me-3 img-fluid rounded-xl"
                              width="94"
                              src="images/dish/pic2.jpg"
                              alt="DexignZone"
                            />
                          </Link>
                          <div class="media-body">
                            <h5 class="mt-0 mb-3 fs-13">
                              <Link
                                class="text-black"
                                to="ecom-product-detail.html"
                              >
                                Chicken curry special with cucumber
                              </Link>
                            </h5>
                            <small class="mb-0">
                              <Link class="text-primary" to="#">
                                PIZZA
                              </Link>
                            </small>
                          </div>
                        </div>
                        <p class="f-13 text-black mb-4">
                          Fast, professional and friendly service, we ordered
                          the six course tasting menu and every dish was
                          spectacular
                        </p>
                        <div class="reviewer-box">
                          <div class="media d-flex align-items-center">
                            {/* <img class="me-3 img-fluid rounded" width="55" src="images/avatar/2.jpg" alt="DexignZone" /> */}
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-white fs-13">
                                Pastries
                              </h4>
                              <small class="mb-0 text-light fs-13">
                                Pastires
                              </small>
                            </div>
                            <div class="star-review d-flex ms-2">
                              <i class="fa fa-star text-orange fs-13"></i>
                              <span class="ms-2 fs-13">5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="items">
                      <div class="bootstrap-media card p-4">
                        <div class="media mb-4 d-flex align-items-center">
                          <Link to="ecom-product-detail.html">
                            <img
                              class="me-3 img-fluid rounded-xl"
                              width="94"
                              src="images/dish/pic3.jpg"
                              alt="DexignZone"
                            />
                          </Link>
                          <div class="media-body">
                            <h5 class="mt-0 mb-3 fs-13">
                              <Link
                                class="text-black"
                                to="ecom-product-detail.html"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small class="mb-0">
                              <Link class="text-primary" to="#">
                                JUICE
                              </Link>
                            </small>
                          </div>
                        </div>
                        <p class="f-13 text-black mb-4">
                          A very fine addition to the not over plentiful supply
                          of good restaurants in this part of west London.
                        </p>
                        <div class="reviewer-box">
                          <div class="media d-flex align-items-center">
                            {/* <img class="me-3 img-fluid rounded" width="55" src="images/avatar/3.jpg" alt="DexignZone" /> */}
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-white fs-13">
                                Brownies
                              </h4>
                              <small class="mb-0 text-light fs-13">
                                Brownies
                              </small>
                            </div>
                            <div class="star-review d-flex ms-2">
                              <i class="fa fa-star text-orange fs-13"></i>
                              <span class="ms-2 fs-13">3.5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="items">
                      <div class="bootstrap-media card p-4">
                        <div class="media mb-4 d-flex align-items-center">
                          <Link to="ecom-product-detail.html">
                            <img
                              class="me-3 img-fluid rounded-xl"
                              width="94"
                              src="images/dish/pic4.jpg"
                              alt="DexignZone"
                            />
                          </Link>
                          <div class="media-body">
                            <h5 class="mt-0 mb-3 fs-13">
                              <Link
                                class="text-black"
                                to="ecom-product-detail.html"
                              >
                                Meidum Spicy Spagethi Italiano
                              </Link>
                            </h5>
                            <small class="mb-0">
                              <Link class="text-primary" to="#">
                                BURGER
                              </Link>
                            </small>
                          </div>
                        </div>
                        <p class="f-13 text-black mb-4">
                          A very fine addition to the not over plentiful supply
                          of good restaurants in this part of west London.
                        </p>
                        <div class="reviewer-box">
                          <div class="media d-flex align-items-center">
                            {/* <img class="me-3 img-fluid rounded" width="55" src="images/avatar/4.jpg" alt="DexignZone" /> */}
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-white fs-13">
                                Cheese Cake
                              </h4>
                              <small class="mb-0 text-light fs-13">
                                Cheese Cake
                              </small>
                            </div>
                            <div class="star-review d-flex ms-2 fs-13">
                              <i class="fa fa-star text-orange fs-13"></i>
                              <span class="ms-2 fs-13">4.2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="items">
                      <div class="bootstrap-media card p-4">
                        <div class="media mb-4 d-flex align-items-center">
                          <Link to="ecom-product-detail.html">
                            <img
                              class="me-3 img-fluid rounded-xl"
                              width="94"
                              src="images/dish/pic5.jpg"
                              alt="DexignZone"
                            />
                          </Link>
                          <div class="media-body">
                            <h5 class="mt-0 mb-3 fs-13">
                              <Link
                                class="text-black"
                                to="ecom-product-detail.html"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small class="mb-0">
                              <Link class="text-primary" to="#">
                                PIZZA
                              </Link>
                            </small>
                          </div>
                        </div>
                        <p class="f-13 text-black mb-4">
                          A very fine addition to the not over plentiful supply
                          of good restaurants in this part of west London.
                        </p>
                        <div class="reviewer-box">
                          <div class="media d-flex align-items-center">
                            {/* <img class="me-3 img-fluid rounded" width="55" src="images/avatar/5.jpg" alt="DexignZone" /> */}
                            <div class="media-body">
                              <h4 class="mt-0 mb-1 text-white fs-13">
                                Cupcake
                              </h4>
                              <small class="mb-0 text-light fs-13">
                                Cupcake
                              </small>
                            </div>
                            <div class="star-review d-flex ms-2">
                              <i class="fa fa-star text-orange fs-13"></i>
                              <span class="ms-2 fs-13">4.2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="">
                  <button
                    className="btn btn-primary btn-sm ml-2"
                    id="filter"
                    style={{ width: "10%", float: "right" }}
                  >
                    Print
                  </button>
                  <button
                    className="btn btn-primary btn-sm ml-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    id="filter"
                    style={{ width: "15%", float: "right" }}
                  >
                    Add Product{" "}
                    <img src="images/icons/plus.svg" width={20} alt="icons" />
                  </button>

                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="exampleModalCenter">
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
                            {/* <div className='form-group'>
                                                            <label className='mb-1 '>
                                                                <h6 className="text-muted">Customer Name:</h6>
                                                            </label>
                                                            <input type='text' className='form-control' name='name'
                                                            />
                                                        </div> */}
                            <div className="form-group">
                              <label className="mb-1 ">
                                <h6 className="text-muted">Product Name:</h6>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                              />
                              {/* {errors.email && <div className="text-danger fs-12">{errors.email}</div>} */}
                            </div>
                            <div className="form-group">
                              <label className="mb-1 ">
                                <h6 className="text-muted">Category</h6>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="phonenumber"
                              />
                            </div>

                            <div className="form-group">
                              <label className="mb-1 ">
                                <h6 className="text-muted">Price</h6>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="phonenumber"
                              />
                            </div>

                            <div className="form-group">
                              <label className="mb-1 ">
                                <h6 className="text-muted">In Stock</h6>
                              </label>
                              <select
                                type="select"
                                className="form-control"
                                name="phonenumber"
                              >
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <label className="mb-1 ">
                                <h6 className="text-muted">Size</h6>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="size"
                              />
                            </div>

                            <hr className="horizontalLine" />
                            {/* {errors.password && <div className="text-danger fs-12">{errors.password}</div>} */}
                          </form>
                          <div className="sweetalert mt-5 ">
                            <button
                              onClick={() =>
                                swal(
                                  "Good job!",
                                  "You clicked the button!",
                                  "success"
                                )
                              }
                              className="btn btn-primary btn-block sweet-success"
                              id="filter"
                            >
                              Add Product
                            </button>
                          </div>
                        </div>
                        {/* <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <br />
                  <div class="card" id="card">
                    <div class="card-header">
                      <h4 class="card-title">List of Products</h4>
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
                              <th>Product Name</th>
                              <th>Category</th>
                              <th>Price</th>
                              <th>Size</th>
                              <th>In Stock</th>
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
                              <td>Cheese Cake</td>
                              <td>Cheese Cake</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <i class="fa fa-circle text-warning me-1"></i>{" "}
                                  GH₵ 250
                                </div>
                              </td>
                              <td>L</td>
                              <td>Yes</td>
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
                              <td>542</td>
                              <td>Cheese Cake</td>
                              <td>Cheese Cake</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <i class="fa fa-circle text-warning me-1"></i>{" "}
                                  GH₵ 250
                                </div>
                              </td>
                              <td>L</td>
                              <td>No</td>
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
                              <td>542</td>
                              <td>Cheese Cake</td>
                              <td>Cheese Cake</td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <i class="fa fa-circle text-warning me-1"></i>{" "}
                                  GH₵ 250
                                </div>
                              </td>
                              <td>L</td>
                              <td>Yes</td>
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
export default AddProduct;
