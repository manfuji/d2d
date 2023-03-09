import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const [selected, setSelected] = useState({});
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, []);
  const registrationState = {
    username: "",
    password: "",
    email: "",
    fullname: "",
    dob: "",
    confirmPassword: "",
    phone_number: "",
    gender: "",
  };
  // const [loginData, setLoginData] = useState(initialLoginState);

  const [registerData, setRegisterData] = useState(registrationState);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.access}`,
    },
  };
  // sign up integration
  const HandleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const HandleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    if (registerData.password.length < 6) {
      return swal(
        "Password!",
        "Password must be greated than 6 characters",
        "error"
      );
    }
    if (registerData.password !== registerData.confirmPassword) {
      return swal("Password!", "password do not match", "error");
    } else {
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user-register/`, registerData)
      .then((res) => {
        console.log(res.data);
        setUpdated(true);
        // localStorage.setItem(
        //   "userDetials",
        //   JSON.stringify({ ...res.data, isAthenticated: true })
        // );
        // dispatch({
        //   type: USERDATA,
        //   payload: { ...res.data, isAthenticated: true },
        // });
        // toast.success("Proceed to login");
        // handleCloseSignUp();
        // show();
        return swal("User!", "User created successfully", "success");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(loginData);/
  };

  useEffect(() => {
    // users
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/user", config)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, [updated]);
  console.log(selected);
  return (
    <div className="App">
      <div>
        <div className="content-body">
          {/* Row */}
          <div className="container-fluid">
            <div className="form-head d-flex mb-3 align-items-start">
              <div className="me-auto d-none d-lg-block">
                <h3 className="font-w600 mb-0">Add User</h3>
                <small className="mb-0">Welcome to add user's page!</small>
              </div>
            </div>
            <hr />

            <div className="row">
              <div class="col-xl-4 col-lg-4">
                <div class="basic-form">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Sort by Region</label>
                      <select class="default-select  form-control wide">
                        <option value="AHAFO">AHAFO</option>
                        <option value="ASHANTI">ASHANTI</option>
                        <option value="BONO EAST">BONO EAST</option>
                        <option value="BRONG AHAFO">BRONG AHAFO</option>
                        <option value="CENTRAL">CENTRAL</option>
                        <option value="EASTERN">EASTERN</option>
                        <option value="GREATER ACCRA">GREATER ACCRA</option>
                        <option value="NORTH EAST">NORTH EAST</option>
                        <option value="NORTHERN">NORTHERN</option>
                        <option value="OTI">OTI</option>
                        <option value="SAVANNAH">SAVANNAH</option>
                        <option value="UPPER EAST">UPPER EAST</option>
                        <option value="UPPER WEST">UPPER WEST</option>
                        <option value="WESTERN">WESTERN</option>
                        <option value="WESTERN NORTH">WESTERN NORTH</option>
                        <option value="VOLTA">VOLTA</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="basic-form">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Year Joined</label>
                      <select class="default-select  form-control wide">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="basic-form">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Group</label>
                      <select class="default-select  form-control wide">
                        <option value=""></option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="">
                <button
                  className="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                  id="filter"
                  style={{ width: "15%", float: "right" }}
                >
                  New User{" "}
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
                        <h5 class="modal-title">Add New User</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form
                          className="login-form mt-4 scroll"
                          id="style"
                          onSubmit={HandleSubmitRegister}
                        >
                          <div className="row">
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Full Name</h6>
                                {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="fullname"
                                  required
                                  onChange={HandleChange}
                                  value={registerData.fullname}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Email</h6>
                                {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                <input
                                  type="email"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="email"
                                  required
                                  onChange={HandleChange}
                                  value={registerData.email}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Phone Number</h6>
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
                                  name="phone_number"
                                  required=""
                                  onChange={HandleChange}
                                  value={registerData.phone_number}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Gender</h6>
                                {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}

                                <select
                                  class="default-select  form-control wide"
                                  value={registerData.gender}
                                  onChange={HandleChange}
                                >
                                  <option value="male">male</option>
                                  <option value="female">female</option>
                                </select>
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Date of Birth</h6>
                                {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="date"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="dob"
                                  required=""
                                  onChange={HandleChange}
                                  value={registerData.dob}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Username</h6>
                                {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="username"
                                  required=""
                                  onChange={HandleChange}
                                  value={registerData.username}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Password</h6>
                                {/* <img src="images/icons/key.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="password"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="password"
                                  required=""
                                  onChange={HandleChange}
                                  value={registerData.password}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Confirm Password</h6>
                                {/* <img src="images/icons/key.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="password"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="confirmPassword"
                                  required=""
                                  onChange={HandleChange}
                                  value={registerData.confirmPassword}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-lg-12 mb-0">
                              <button className="btn btn-block" id="login">
                                Add User
                              </button>
                            </div>
                            {/* // <!--end col--> */}
                          </div>
                          {/* <!--end row--> */}
                        </form>
                      </div>
                      {/* <div class="modal-footer">
                                                <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div> */}
                    </div>
                  </div>
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="basicModal">
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">User Details</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div class="modal-body">
                          {selected && (
                            <form className="login-form mt-4 scroll" id="style">
                              <div className="row">
                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Full Name</h6>
                                    {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                    <span>{selected.fullname}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Email</h6>
                                    {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                    <span>{selected.email}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Phone Number</h6>
                                    <span>{selected.phone_number}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">GPS Address</h6>
                                    {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                    <span>{selected.is_active}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Gender</h6>
                                    {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                    <span>{selected.gender}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Date of Birth</h6>
                                    {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <span>{selected.dob}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                <div class="col-md-6">
                                  <div class="form-group position-relative">
                                    <h6 className="size">Username</h6>
                                    {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                    <span>{selected.username}</span>
                                  </div>
                                </div>
                                {/* <!--end col--> */}

                                {/* <div className="col-lg-12 mb-0">
                                  <button
                                    onClick={() =>
                                      swal(
                                        "Good job!",
                                        "You clicked the button!",
                                        "success"
                                      )
                                    }
                                    className="btn btn-block"
                                    id="login"
                                  >
                                    Add User
                                  </button>
                                </div> */}
                                {/* // <!--end col--> */}
                              </div>
                              {/* <!--end row--> */}
                            </form>
                          )}
                        </div>
                        {/* <div class="modal-footer">
                                                <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12">
                <br />
                <div class="card" id="card">
                  <div class="card-header">
                    {/* <h4 class="card-title"></h4> */}
                    <div class="header-left">
                      <div class="input-group search-area">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search here..."
                        />
                        <span class="input-group-text">
                          <Link to="#">
                            <i class="flaticon-381-search-2"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th>#ID</th>
                            <th> Username</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>full Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users?.map((user) => (
                            <>
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                  <span class="w-space-no">
                                    {user.username}
                                  </span>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                  {user.phone_number
                                    ? user.phone_number
                                    : "No Number"}
                                </td>
                                <td>
                                  {user.fullname ? user.fullname : "Full Name"}
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      onClick={() => setSelected(user)}
                                      class="btn btn-primary shadow btn-xs sharp me-1"
                                      id="editIcon"
                                      data-bs-toggle="modal"
                                      data-bs-target="#basicModal"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <i class="fas fa-eye"></i>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </>
                          ))}
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
};
export default AddUser;
