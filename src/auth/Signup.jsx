import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../Auth.css";

const Signup = () => {
  return (
    <div className="App">
      {/* PAGE LOADER STARTS */}
      {/*  {/*  <div id="preloader">
                    <div id="status">
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                    </div>
                </div>  */}{" "}
      {/* PAGE LOADER ENDS */}
      {/* Icon Leaing to Home Starts */}
      <div className="back-to-home rounded d-none d-sm-block" id="back-to-home">
        <Link to="/" className="btn btn-icon" id="homeIcon">
          <img
            src="images/icons/home-white.svg"
            className="fea icon-sm icons"
            alt="key"
          />
        </Link>
      </div>
      {/* Icon Leaing to Home Ends */}
      {/* <!-- Hero Start --> */}
      <section className="cover-user bg-white">
        <div className="container-fluid px-0">
          <div className="row no-gutters position-relative">
            <div className="col-lg-4 cover-my-30 order-2">
              <div className="cover-user-img d-flex align-items-center">
                <div className="row">
                  <div className="col-12">
                    <div className="login-page border-0">
                      <div className="card-body p-0">
                        <center>
                          <img
                            src="images/logo/logo.png"
                            width={130}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </center>
                        <h4 className="card-title text-center font-w600 text-dark">
                          Welcome to Desserts to Door
                        </h4>
                        <h6 className="text-center text-dark">
                          Please Sign up to get started
                        </h6>

                        {/* <hr /> */}
                        <form className="login-form mt-4 scroll" id="style">
                          <div className="row">
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  First name <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/user.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="user"
                                />
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="s"
                                  required=""
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Last name <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/user.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="user"
                                />
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="s"
                                  required=""
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Address <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/mail.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="address"
                                />
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="s"
                                  required=""
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Phone Number{" "}
                                  <span class="text-danger">*</span>
                                </h6>
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
                                <h6 className="size">
                                  Email <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/mail.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="address"
                                />
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
                                <h6 className="size">
                                  Shop Name <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/shop.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
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

                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Company's Certificate{" "}
                                  <span class="text-danger">*</span>
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
                                <h6 className="size">
                                  Location on Map{" "}
                                  <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/map-pin.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
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
                                  Bank Account{" "}
                                  <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/credit-card.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="address"
                                />
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

                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Cover Photo <span class="text-danger">*</span>
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

                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Owner Ghana Card{" "}
                                  <span class="text-danger">*</span>
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
                                <h6 className="size">
                                  Manager’s Number{" "}
                                  <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/hash.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
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

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Username <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/user.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
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
                                <h6 className="size">
                                  Password <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/key.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
                                <input
                                  type="number"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="Password"
                                  required=""
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Confirm Password{" "}
                                  <span class="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/key.svg"
                                  className="fea icon-sm icons"
                                  id="okay"
                                  alt="mail"
                                />
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="ConfirmPassword"
                                  required=""
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-12">
                              <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                    id="termsCondition"
                                  >
                                    I Accept{" "}
                                    <Link to="/" class="text-primary">
                                      Terms And Condition
                                    </Link>
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-lg-12 mb-0">
                              <Link
                                to={"/dashboard"}
                                className="btn btn-block"
                                id="login"
                              >
                                Sign up
                              </Link>
                            </div>
                            {/* 
                                                            // <!--end col--> */}

                            <div className="col-12 text-center">
                              <h6 className="mb-0 mt-3">
                                <small className="text-dark mr-2">
                                  Already have an account ?
                                </small>{" "}
                                <Link
                                  to="/"
                                  className=" font-weight-bold"
                                  id="signUp"
                                >
                                  Sign in{" "}
                                </Link>
                              </h6>
                            </div>
                            {/* 
                                                            // <!--end col--> */}
                          </div>
                          {/* <!--end row--> */}
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* 
                                        // <!--end col--> */}
                </div>
                {/* <!--end row--> */}
              </div>
              {/* <!-- end about detail --> */}
            </div>
            {/* <!-- end col -->     */}

            <div
              className="col-lg-8 offset-lg-4 padding-less img order-1"
              id="signImage"
              data-jarallax='{"speed": 0.5}'
            ></div>
            {/* <!-- end col -->     */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container fluid--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- Hero End --> */}
    </div>
  );
};
export default Signup;
