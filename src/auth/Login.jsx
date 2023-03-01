import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";
// import { LoginApi } from "../services/api/Login.api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/auth";
// import { baseUrl } from "../services/config/baseUrl";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  let [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [formInput, setFormInput] = useState(initialState);
  const onChangedHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formInput);
    axios
      .post(process.env.REACT_APP_BASE_URL + "/login/", formInput)
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // currentUser = await (await LoginApi(formInput)).data;
  };
  useEffect(() => {
    if (user && user.is_superuser) {
      navigate("/superadmin_dashboard");
      console.log("===================1", user);
    }
    if (user && user.is_vendor) {
      navigate("/dashboard");
      console.log("===================2", user);
    }
    if (user && user.is_user) {
      navigate("/users-dashboard");
      console.log("===================3", user);
    }
    // if (user && user.is_superadmin) return navigate("/superadmin");
  }, [user, navigate]);

  console.log("shasahhhhhhhshshsh", user);
  return (
    <div className="App">
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
                        {/* <hr /> */}
                        <form
                          className="login-form mt-4"
                          style={{ marginBottom: "200px" }}
                          onSubmit={onSubmitHandler}
                        >
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group position-relative">
                                <h6>
                                  Your username{" "}
                                  <span className="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/mail.svg"
                                  className="fea icon-sm icons"
                                  alt="key"
                                />
                                <input
                                  type="username"
                                  className="email form-control pl-5"
                                  placeholder="Username"
                                  name="username"
                                  value={formInput.username}
                                  onChange={onChangedHandler}
                                  required
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-lg-12">
                              <div className="form-group position-relative">
                                <h6>
                                  Password{" "}
                                  <span className="text-danger">*</span>
                                </h6>
                                <img
                                  src="images/icons/key.svg"
                                  className="fea icon-sm icons"
                                  alt="key"
                                />
                                <input
                                  type="password"
                                  name="password"
                                  className="password form-control pl-5"
                                  placeholder="Password"
                                  value={formInput.password}
                                  required
                                  onChange={onChangedHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-lg-12">
                              <div className="d-flex justify-content-between">
                                <div className="form-group">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customCheck1"
                                    />
                                    <label
                                      className="custom-control-label text-dark"
                                      id="rememberMe"
                                      for="customCheck1"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <p className="forgot-pass mb-0">
                                  <Link
                                    to="/recover-password"
                                    className="text-dark font-weight-bold"
                                  >
                                    Forgot password ?
                                  </Link>
                                </p>
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            {/* <center>
                                                                <hr id="line" />
                                                            </center> */}

                            <div className="col-lg-12 mb-0">
                              <button
                                className="btn btn-block login"
                                id="login"
                                type="submit"
                                value="submit"
                              >
                                Sign in
                              </button>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-12 text-center">
                              <h6 className="mb-0 mt-3">
                                <small className="text-dark mr-2">
                                  Don't have an account ?
                                </small>{" "}
                                <Link
                                  to="/sign-up"
                                  className=" font-weight-bold"
                                  id="signUp"
                                >
                                  Sign Up{" "}
                                </Link>
                              </h6>
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

            <div
              className="col-lg-8 offset-lg-4 padding-less img order-1"
              id="loginImage"
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
export default Login;
