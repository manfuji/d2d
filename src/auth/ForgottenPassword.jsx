import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

class ForgottenPassword extends React.Component{
    render(){
        return(
            <div className="App">
                {/* PAGE LOADER STARTS */}
                {/* <div id="preloader">
                    <div id="status">
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                    </div>
                </div>  */}
                {/* PAGE LOADER ENDS */}

                {/* Icon Leaing to Home Starts */}
                <div className="back-to-home rounded d-none d-sm-block" id="back-to-home">
                    <Link to="/" className="btn btn-icon" id="homeIcon">
                    <img src="images/icons/home-white.svg" className="fea icon-sm icons" alt="key" />
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
                                                        <img src="images/logo/logo.png" width={130} className="img-fluid" alt="Logo" />
                                                    </center>
                                                    <h4 className="card-title text-center font-w600 text-dark">Recover Account</h4>
                                                    <p className="text-muted" id="enterEmail">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                    {/* <hr /> */}
                                                    <form className="login-form mt-4">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group position-relative">
                                                                    <h6>Your Email <span className="text-danger">*</span></h6>
                                                                    <img src="images/icons/mail.svg" className="fea icon-sm icons" alt="key" />  
                                                                    <input type="email" className="form-control pl-5" placeholder="Enter your email address" name="email" required="" />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}

                                                            {/* <center>
                                                                <hr id="line" />
                                                            </center> */}

                                                            <div className="col-lg-12 mb-0">
                                                                <button className="btn btn-block" id="login">Send</button>
                                                            </div>
                                                            {/* <!--end col--> */}

                                                            <div className="col-12 text-center">
                                                                <h6 className="mb-0 mt-3"><small className="text-dark mr-2">Don't have an account ?</small> <Link to="/" className=" font-weight-bold" id="signUp">Sign in </Link></h6>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                        </div>
                                                        {/* <!--end row--> */}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                {/* <!-- end about detail --> */}
                            </div>
                            {/* <!-- end col -->     */}

                            <div className="col-lg-8 offset-lg-4 padding-less img order-1" id="recover" data-jarallax='{"speed": 0.5}'></div>
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
    }
}
export default ForgottenPassword;