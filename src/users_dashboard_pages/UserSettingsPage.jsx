import React from "react";
import "../Users.css";

class UsersSettingsPage extends React.Component {
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
                  <h3 className="font-w400 mb-0">User Settings Page</h3>
                  <small className="mb-0">Welcome to Your Settings Page</small>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xl-6">
                  <div className="card" id="">
                    <div className="card-body">
                      {/* <!-- Default accordion --> */}

                      <div
                        class="accordion accordion-primary"
                        id="accordion-one"
                      >
                        <div class="accordion-item">
                          <div
                            class="accordion-header "
                            id="headingOne"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-controls="collapseOne"
                            aria-expanded="true"
                            role="button"
                          >
                            <span class="accordion-header-icon"></span>
                            <span class="accordion-header-text">
                              Personal Details
                            </span>
                            <span class="accordion-header-indicator"></span>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordion-one"
                          >
                            <div class="accordion-body-text">
                              <div className="row">
                                <div className="col-12">
                                  <div className="login-page border-0">
                                    <div className="card-body p-0">
                                      {/* <hr /> */}
                                      <form
                                        className="login-form mt-4 scroll"
                                        id="style"
                                      >
                                        <div className="row">
                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Full Name
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
                                                name="Fullname"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Email</h6>
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
                                                Phone Number
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
                                              <h6 className="size">Address</h6>
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
                                                name="GpsAddress"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Gender</h6>
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
                                                name="gender"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Date of Birth
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
                                                name="Dob"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div className="col-lg-12 mb-0">
                                            <button
                                              className="btn btn-block"
                                              id="login"
                                            >
                                              Update Details
                                            </button>
                                          </div>
                                          {/* // <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                {/*// <!--end col--> */}
                              </div>
                              {/* <!--end row--> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="">
                    <div className="card-body" id="LeftBorder">
                      <h6 className="fs-14">
                        <b>Note:</b>
                      </h6>
                      <span className="fs-14 font-w300">
                        When ordering a product, client should select if the
                        shipping address should be the same as the account
                        address.
                      </span>
                      <p></p>
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
export default UsersSettingsPage;
