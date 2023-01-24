import React from "react";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";


class ProfileSettings extends React.Component {
    render() {
        return (
            <div className="App">
                <div id="preloader">
                    <div class="sk-three-bounce">
                        <div class="sk-child sk-bounce1"></div>
                        <div class="sk-child sk-bounce2"></div>
                        <div class="sk-child sk-bounce3"></div>
                    </div>
                </div>

                <div id="main-wrapper">
                    <div className="content-body">
                        {/* Row */}
                        <div className="container-fluid">
                            <div className="form-head d-flex mb-3 align-items-start">
                                <div className="me-auto d-none d-lg-block">
                                    <h3 className="font-w600 mb-0">Profile Settings</h3>
                                    <small className="mb-0">Welcome to Your Profile settings</small>
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

                                            <div class="accordion accordion-primary" id="accordion-one">
                                                <div class="accordion-item">
                                                    <div class="accordion-header " id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="true" role="button">
                                                        <span class="accordion-header-icon"></span>
                                                        <span class="accordion-header-text">Profile Settings</span>
                                                        <span class="accordion-header-indicator"></span>
                                                    </div>
                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
                                                        <div class="accordion-body-text">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="login-page border-0">
                                                                        <div className="card-body p-0">

                                                                            {/* <hr /> */}
                                                                            <form className="login-form mt-4 scroll" id="style">

                                                                                <div className="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Full Name</h6>
                                                                                            {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                                                                            <input type="text" class="form-control pl-5" placeholder="" name="Fullname" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Email</h6>
                                                                                            {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                                                                            <input type="email" class="form-control pl-5" placeholder="" name="Email" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Phone Number</h6>
                                                                                            <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" />
                                                                                            <input type="text" class="form-control pl-5" placeholder="" name="PhoneNumber" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}


                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">GPS Address</h6>
                                                                                            {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                                                                            <input type="text" class="form-control pl-5" placeholder="" name="GpsAddress" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Gender</h6>
                                                                                            {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                                                                            <input type="email" class="form-control pl-5" placeholder="" name="gender" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}


                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Date of Birth</h6>
                                                                                            {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                                                            <input type="text" class="form-control pl-5" placeholder="" name="Dob" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-12">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Cover Photo</h6>
                                                                                            {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                                                            <input type="file" class="form-control pl-5" placeholder="" name="Certificate" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-12">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Owner Ghana Card </h6>
                                                                                            {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                                                            <input type="file" class="form-control pl-5" placeholder="" name="Certificate" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}


                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Username</h6>
                                                                                            {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                                                            <input type="text" class="form-control pl-5" placeholder="" name="Username" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group position-relative">
                                                                                            <h6 className="size">Password</h6>
                                                                                            {/* <img src="images/icons/key.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                                                                            <input type="password" class="form-control pl-5" placeholder="" name="Password" required="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <!--end col--> */}

                                                                                    <div className="col-lg-12 mb-0">
                                                                                        <button className="btn btn-block" id="login">Update Settings</button>
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
export default ProfileSettings;