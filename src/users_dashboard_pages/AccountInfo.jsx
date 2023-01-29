import React from "react";
import { Link } from "react-router-dom";
// import swal from "sweetalert";

class AccountInfo extends React.Component {
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
            <div className="container-fluid">
              <div className="form-head d-flex mb-3 align-items-start">
                <div className="me-auto d-none d-lg-block">
                  <h3 className="font-w600 mb-0">Account Information</h3>
                  <small className="mb-0">
                    Welcome to Your Account Information
                  </small>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-lg-12">
                  <div class="profile card card-body px-3 pt-3 pb-0">
                    <div class="profile-head">
                      <div class="photo-content">
                        <div class="cover-photo rounded"></div>
                      </div>
                      <div class="profile-info">
                        <div class="profile-photo">
                          <img
                            src="images/avatar/.jpeg"
                            width={90}
                            height={90}
                            class="img-fluid rounded-circle"
                            alt="profile"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="profile-name px-3 pt-2">
                            <h4 class="text-primary mb-0">Beatrice Hikes</h4>
                            <p>Vendor</p>
                          </div>
                          <div class="profile-email px-2 pt-2">
                            <h4 class="text-muted mb-0 fs-12">
                              info@example.com
                            </h4>
                            <p className="fs-10">Email</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card" id="card">
                        <div class="card-body">
                          <div class="profile-statistics">
                            <div class="text-center">
                              <div class="row">
                                <div class="col">
                                  <h3 class="m-b-0">0</h3>
                                  <span>Follower</span>
                                </div>
                                <div class="col">
                                  <h3 class="m-b-0">0</h3>
                                  <span>Place Stay</span>
                                </div>
                                <div class="col">
                                  <h3 class="m-b-0">0</h3>
                                  <span>Reviews</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="card" id="card">
                    <div class="card-body">
                      <div class="profile-tab">
                        <div class="custom-tab-1">
                          <ul class="nav nav-tabs">
                            <li class="nav-item">
                              <Link
                                to="#about-me"
                                data-bs-toggle="tab"
                                class="nav-link"
                              >
                                About Me
                              </Link>
                            </li>
                            <li class="nav-item">
                              <Link
                                to="#profile-settings"
                                data-bs-toggle="tab"
                                class="nav-link"
                              >
                                Setting
                              </Link>
                            </li>
                          </ul>
                          <div class="tab-content">
                            <div id="about-me" class="tab-pane fade">
                              <div class="profile-about-me">
                                <div class="pt-4 border-bottom-1 pb-3">
                                  <h4 class="text-primary">About Me</h4>
                                  <p class="mb-2">
                                    A wonderful serenity has taken possession of
                                    my entire soul, like these sweet mornings of
                                    spring which I enjoy with my whole heart. I
                                    am alone, and feel the charm of existence
                                    was created for the bliss of souls like
                                    mine.I am so happy, my dear friend, so
                                    absorbed in the exquisite sense of mere
                                    tranquil existence, that I neglect my
                                    talents.
                                  </p>
                                  <p>
                                    A collection of textile samples lay spread
                                    out on the table - Samsa was a travelling
                                    salesman - and above it there hung a picture
                                    that he had recently cut out of an
                                    illustrated magazine and housed in a nice,
                                    gilded frame.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div id="profile-settings" class="tab-pane fade">
                              <div class="pt-3">
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
                                                <h6 className="size">
                                                  Address
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
                                              <hr />
                                              {/* <button className="btn btn-block" id="login">Update Details</button> */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountInfo;
