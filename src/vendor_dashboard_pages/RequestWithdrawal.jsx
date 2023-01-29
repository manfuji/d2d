import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class RequestWithdrawal extends React.Component {
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
                  <h3 className="font-w600 mb-0">Request Withdrawal</h3>
                  <small className="mb-0">
                    Welcome to Your Withdrawal Request Options
                  </small>
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
                              Request Withdrawal
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
                                      <i class="la la-list me-2"></i>Mobile
                                      Money Withdrawal
                                    </Link>
                                  </li>
                                  <li class="nav-item">
                                    <Link
                                      class="nav-link"
                                      data-bs-toggle="tab"
                                      to="#profile"
                                    >
                                      <i class="la la-credit-card me-2"></i>{" "}
                                      Bank Withdrawal
                                    </Link>
                                  </li>
                                  {/* <li class="nav-item">
                                                                        <Link class="nav-link" data-bs-toggle="tab" to="#contact"><i class="la la-phone me-2"></i> Contact</Link>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <Link class="nav-link" data-bs-toggle="tab" to="#message"><i class="la la-envelope me-2"></i> Message</Link>
                                                                    </li> */}
                                </ul>
                                <div class="tab-content">
                                  <div
                                    class="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                  >
                                    <div class="pt-4">
                                      <h4>Mobile Money Withdrawal</h4>
                                      <hr />
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
                                                        Select Network
                                                      </h6>
                                                      {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                                      <select
                                                        type="text"
                                                        class="form-control pl-5"
                                                        placeholder=""
                                                        name="SelectNetwork"
                                                      >
                                                        <option value="vodafone">
                                                          Vodafone
                                                        </option>
                                                        <option value="mtn">
                                                          MTN
                                                        </option>
                                                        <option value="AirtelTigo">
                                                          AirtelTigo
                                                        </option>
                                                      </select>
                                                    </div>
                                                  </div>
                                                  {/* <!--end col--> */}

                                                  <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                      <h6 className="size">
                                                        Name on Account
                                                      </h6>
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
                                                      <h6 className="size">
                                                        Enter Mobile Money
                                                        Number
                                                      </h6>
                                                      {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                                      <input
                                                        type="text"
                                                        class="form-control pl-5"
                                                        placeholder=""
                                                        name="MomoNumber"
                                                        required=""
                                                      />
                                                    </div>
                                                  </div>
                                                  {/* <!--end col--> */}

                                                  <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                      <h6 className="size">
                                                        Confirm Mobile Money
                                                        Number
                                                      </h6>
                                                      {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                                      <input
                                                        type="text"
                                                        class="form-control pl-5"
                                                        placeholder=""
                                                        name="ConfirmMomoNumber"
                                                        required=""
                                                      />
                                                    </div>
                                                  </div>
                                                  {/* <!--end col--> */}

                                                  <div className="col-lg-12 mb-0">
                                                    <button
                                                      onClick={() =>
                                                        swal({
                                                          title:
                                                            "Are you sure?",
                                                          text: "You want to proceed with your withdrawal!",
                                                          icon: "warning",
                                                          buttons: true,
                                                          dangerMode: true,
                                                        }).then(
                                                          (willDelete) => {
                                                            if (willDelete) {
                                                              swal(
                                                                "Withdrawal has been made successfully!",
                                                                {
                                                                  icon: "success",
                                                                }
                                                              );
                                                              setTimeout(
                                                                function () {
                                                                  window.location.href =
                                                                    "../wallet";
                                                                },
                                                                1500
                                                              );
                                                            } else {
                                                              swal(
                                                                "Withdrawal has been cancelled!"
                                                              );
                                                            }
                                                          }
                                                        )
                                                      }
                                                      className="btn btn-block"
                                                      id="login"
                                                      type="button"
                                                    >
                                                      Make Withdrawal
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
                                  <div class="tab-pane fade" id="profile">
                                    <div class="pt-4">
                                      <h4>Bank Withdrawal</h4>
                                      <hr />
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
                                                        Bank Name
                                                      </h6>
                                                      {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                                      <input
                                                        type="text"
                                                        class="form-control pl-5"
                                                        placeholder=""
                                                        name="BankName"
                                                        required=""
                                                      />
                                                    </div>
                                                  </div>
                                                  {/* <!--end col--> */}

                                                  <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                      <h6 className="size">
                                                        Name on Account
                                                      </h6>
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
                                                      <h6 className="size">
                                                        Branch
                                                      </h6>
                                                      {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                      <input
                                                        type="text"
                                                        class="form-control pl-5"
                                                        placeholder=""
                                                        name="Certificate"
                                                        required=""
                                                      />
                                                    </div>
                                                  </div>
                                                  {/* <!--end col--> */}

                                                  <div className="col-lg-12 mb-0">
                                                    <button
                                                      onClick={() =>
                                                        swal({
                                                          title:
                                                            "Are you sure?",
                                                          text: "You want to proceed with your withdrawal!",
                                                          icon: "warning",
                                                          buttons: true,
                                                          dangerMode: true,
                                                        }).then(
                                                          (willDelete) => {
                                                            if (willDelete) {
                                                              swal(
                                                                "Withdrawal has been made successfully!",
                                                                {
                                                                  icon: "success",
                                                                }
                                                              );
                                                              setTimeout(
                                                                function () {
                                                                  window.location.href =
                                                                    "../wallet";
                                                                },
                                                                1500
                                                              );
                                                            } else {
                                                              swal(
                                                                "Withdrawal has been cancelled!"
                                                              );
                                                            }
                                                          }
                                                        )
                                                      }
                                                      className="btn btn-block"
                                                      id="login"
                                                      type="button"
                                                    >
                                                      Make Withdrawal
                                                    </button>{" "}
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
                                  {/* <div class="tab-pane fade" id="contact">
                                                                        <div class="pt-4">
                                                                            <h4>This is contact title</h4>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                                            </p>
                                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane fade" id="message">
                                                                        <div class="pt-4">
                                                                            <h4>This is message title</h4>
                                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                                            </p>
                                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                                            </p>
                                                                        </div>
                                                                    </div> */}
                                </div>
                              </div>{" "}
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
export default RequestWithdrawal;
