import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../SuperAdmin.css";

class Announcements extends React.Component {
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
                  <h3 className="font-w600 mb-0">Announcement</h3>
                  <small className="mb-0">Welcome to Your Announcement</small>
                </div>
              </div>
              <hr />
              <div className="row">
                <div class="col-xl-12">
                  <div class="card" id="card">
                    {/* <div class="card-header d-block">
                                        <h4 class="card-title">Default Accordion</h4>
                                        <p class="m-0 subtitle">Default accordion. Add <code>accordion</code> class in root</p>
                                    </div> */}
                    <div class="card-body">
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
                              Announcement
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
                              <div class="default-tab">
                                <ul class="nav nav-tabs" role="tablist">
                                  <li class="nav-item">
                                    <Link
                                      class="nav-link active"
                                      data-bs-toggle="tab"
                                      to="#home"
                                    >
                                      <i class="la la-list me-2"></i>General
                                    </Link>
                                  </li>
                                  <li class="nav-item">
                                    <Link
                                      class="nav-link"
                                      data-bs-toggle="tab"
                                      to="#profile"
                                    >
                                      <i class="la la-users me-2"></i> Vendors
                                    </Link>
                                  </li>
                                  <li class="nav-item">
                                    <Link
                                      class="nav-link"
                                      data-bs-toggle="tab"
                                      to="#contact"
                                    >
                                      <i class="la la-user me-2"></i> Users
                                    </Link>
                                  </li>
                                  <li class="nav-item">
                                    <Link
                                      class="nav-link"
                                      data-bs-toggle="tab"
                                      to="#message"
                                    >
                                      <i class="la la-bicycle me-2"></i> Riders
                                    </Link>
                                  </li>
                                </ul>
                                <div class="tab-content">
                                  <div
                                    class="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                  >
                                    <div class="pt-4">
                                      <h4>General Annoucement</h4>
                                      <hr />
                                      {/* <hr /> */}
                                      <form
                                        className="login-form mt-4 scroll"
                                        id="style"
                                      >
                                        <div className="row">
                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">From</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Receiver</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Subject</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Email</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Message</h6>
                                              {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                              <textarea
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="Certificate"
                                                required=""
                                              ></textarea>
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Attachment
                                              </h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="file"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
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
                                              Send
                                            </button>
                                          </div>
                                          {/* // <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                      </form>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="profile">
                                    <div class="pt-4">
                                      <h4>Vendor</h4>
                                      <hr />
                                      <form
                                        className="login-form mt-4 scroll"
                                        id="style"
                                      >
                                        <div className="row">
                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">From</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Receiver</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Subject</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Email</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Message</h6>
                                              {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                              <textarea
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="Certificate"
                                                required=""
                                              ></textarea>
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Attachment
                                              </h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="file"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
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
                                              Send
                                            </button>
                                          </div>
                                          {/* // <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                      </form>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="contact">
                                    <div class="pt-4">
                                      <h4>User</h4>
                                      <hr />
                                      <form
                                        className="login-form mt-4 scroll"
                                        id="style"
                                      >
                                        <div className="row">
                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">From</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Receiver</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Subject</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Email</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Message</h6>
                                              {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                              <textarea
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="Certificate"
                                                required=""
                                              ></textarea>
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Attachment
                                              </h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="file"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
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
                                              Send
                                            </button>
                                          </div>
                                          {/* // <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                      </form>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="message">
                                    <div class="pt-4">
                                      <h4>Rider</h4>
                                      <form
                                        className="login-form mt-4 scroll"
                                        id="style"
                                      >
                                        <div className="row">
                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">From</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Receiver</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Subject</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="from"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-6">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Email</h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
                                                required=""
                                              />
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">Message</h6>
                                              {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                              <textarea
                                                type="text"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="Certificate"
                                                required=""
                                              ></textarea>
                                            </div>
                                          </div>
                                          {/* <!--end col--> */}

                                          <div class="col-md-12">
                                            <div class="form-group position-relative">
                                              <h6 className="size">
                                                Attachment
                                              </h6>
                                              {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                              <input
                                                type="file"
                                                class="form-control pl-5"
                                                placeholder=""
                                                name="NameonAccount"
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
                                              Send
                                            </button>
                                          </div>
                                          {/* // <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="accordion-item">
                                                <div class="accordion-header collapsed rounded-lg" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo" role="button" aria-expanded="true">
                                                    <span class="accordion-header-text">Accordion Header Two</span>
                                                    <span class="accordion-header-indicator"></span>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-one">
                                                    <div class="accordion-body-text">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <div class="accordion-header collapsed rounded-lg" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree" role="button" aria-expanded="true">
                                                    <span class="accordion-header-text">Accordion Header Three</span>
                                                    <span class="accordion-header-indicator"></span>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-one">
                                                    <div class="accordion-body-text">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                    </div>
                                                </div>
                                            </div> */}
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
export default Announcements;
