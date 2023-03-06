import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import MessageAlert from "../components/utils/message";
import { useSelector } from "react-redux";
import Loader from "../components/utils/Loader";

const AddRider = () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);

  const initialstate = {
    fullname: "",
    email: "",
    phone_number: "",
    gps_address: "",
    gender: "",
    dob: "",
    rider_name: "",
    latitude: "",
    registration: "",
    address: "",
    longitude: "",
    managers_number: 0,
    number_of_employees: 0,
    description: "",
    profile: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialstate);
  const [createdRider, setCreatedRider] = useState({});
  const [riders, setRider] = useState([]);

  const [coverPhoto, setCoverPhoto] = useState(null);
  const [companyLogo, setcompanyLogo] = useState(null);
  const [companyRegistration, setcompanyRegistration] = useState(null);
  const [ghanaCard, setGhanaCard] = useState(null);
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, []);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.access}`,
    },
  };

  useEffect(() => {
    // users
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/rider", config)
      .then((response) => {
        setRider(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [updated]);

  const onchangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("ghanaCard", ghanaCard);
    formdata.append("company_registration", companyRegistration);
    // formdata.append("ghanaCard", ghanaCard);
    // formdata.append("ghanaCard", ghanaCard);

    formdata.append("fullname", formData.fullname);
    formdata.append("email", formData.email);
    formdata.append("phone_number", formData.phone_number);
    formdata.append("gps_address", formData.gps_address);
    formdata.append("gender", formData.gender);
    formdata.append("dob", formData.dob);
    formdata.append("shop_name", formData.shop_name);
    formdata.append("latitude", formData.latitude);
    formdata.append("registration", formData.registration);
    formdata.append("address", formData.address);
    formdata.append("longitude", formData.longitude);
    formdata.append("managers_number", formData.managers_number);
    formdata.append("number_of_employees", formData.number_of_employees);
    formdata.append("description", formData.description);
    formdata.append("username", formData.username);
    formdata.append("profile", formData.profile);
    formdata.append("password", formData.password);

    console.log("========", formdata.get("email"));
    // console.log(
    //   "files",
    //   coverPhoto,
    //   companyLogo,
    //   companyRegistration,
    //   ghanaCard
    // );

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "/rider-register/",
        formdata,
        config
      )
      .then((response) => {
        setCreatedRider(response.data);
        setLoading(false);
        setUpdated(true);
        return swal("Rider!", "Rider created successfully", "success");
      })
      .catch((err) => swal("Password!", err.message, "error"));
  };
  if (loading) return <Loader />;

  console.log(riders);

  return (
    <div className="App">
      <div>
        <div className="content-body">
          {/* Row */}
          <div className="container-fluid">
            <div className="form-head d-flex mb-3 align-items-start">
              <div className="me-auto d-none d-lg-block">
                <h3 className="font-w600 mb-0">Add Rider</h3>
                <small className="mb-0">Welcome to add rider's page!</small>
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
                  New Rider{" "}
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
                        <h5 class="modal-title">Add New Vendor</h5>
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
                          onSubmit={handleSubmit}
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
                                  value={formData.fullname}
                                  onChange={onchangeHandler}
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
                                  value={formData.email}
                                  onChange={onchangeHandler}
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
                                  required
                                  value={formData.phone_number}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">GPS Address</h6>
                                {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="latitude"
                                  required
                                  value={formData.latitude}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Gender</h6>
                                {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}

                                <select
                                  class="default-select  form-control wide"
                                  value={formData.gender}
                                  onChange={onchangeHandler}
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
                                  required
                                  value={formData.dob}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Ride Name</h6>
                                {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="rider_name"
                                  required
                                  value={formData.rider_name}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Rider Location</h6>
                                {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="longitude"
                                  required
                                  value={formData.longitude}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">
                                  Ride Registration Details
                                </h6>
                                {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="registration"
                                  required
                                  value={formData.registration}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Address</h6>
                                {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="address"
                                  required
                                  value={formData.address}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */} {/* <!--end col--> */}
                            {/* <!--end col--> */}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Username</h6>
                                {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="username"
                                  required
                                  value={formData.username}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}{" "}
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Password</h6>
                                {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="password"
                                  required
                                  value={formData.password}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            {/* */}
                            {/* <!--end col--> */}
                            {/* <div class="col-md-6">
                              <div class="form-group position-relative">
                                <h6 className="size">Next in Command</h6>
                                <input
                                  type="text"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="NextinCommand"
                                  required
                                  value={formData.phone_number}
                                  onChange={onchangeHandler}
                                />
                              </div>
                            </div> */}
                            {/* <!--end col--> */}
                            {/* <!--end col--> */}
                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">Cover Photo</h6>
                                {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="file"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="Certificate"
                                  required
                                  onChange={(e) =>
                                    setCoverPhoto(e.target.files[0])
                                  }
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">Owner Ghana Card </h6>
                                {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="file"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="Certificate"
                                  required
                                  onChange={(e) =>
                                    setGhanaCard(e.target.files[0])
                                  }
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-md-12">
                              <div class="form-group position-relative">
                                <h6 className="size">Company's Certificate</h6>
                                {/* <img src="images/icons/file-text.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                <input
                                  type="file"
                                  class="form-control pl-5"
                                  placeholder=""
                                  name="Certificate"
                                  required
                                  onChange={(e) =>
                                    setcompanyRegistration(e.target.files[0])
                                  }
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-lg-12 mb-0">
                              <button className="btn btn-block" id="login">
                                Add Rider
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
                          <h5 class="modal-title">Rider Details</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form className="login-form mt-4 scroll" id="style">
                            <div className="row">
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Full Name</h6>
                                  {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
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
                                  {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
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
                                    name="PhoneNumber"
                                    required=""
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}

                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">GPS Address</h6>
                                  {/* <img src="images/icons/phone.svg" className="fea icon-sm icons" id="okay" alt="phone" /> */}
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
                                  {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
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
                                  <h6 className="size">Date of Birth</h6>
                                  {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
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

                              <div class="col-md-12">
                                <div class="form-group position-relative">
                                  <h6 className="size">Cover Photo</h6>
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
                                  <h6 className="size">Owner Ghana Card </h6>
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
                                  <h6 className="size">Username</h6>
                                  {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
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
                                  <h6 className="size">Password</h6>
                                  {/* <img src="images/icons/key.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                  <input
                                    type="password"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="Password"
                                    required=""
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}

                              {/* <div className="col-lg-12 mb-0">
                                                            <button onClick={() =>
                                                                swal(
                                                                    "Good job!",
                                                                    "You clicked the button!",
                                                                    "success"
                                                                )
                                                            } className="btn btn-block" id="login">Add Rider</button>
                                                        </div> */}
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
                            <th>username</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Full Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {riders}
                          <tr>
                            <td>542</td>
                            <td>
                              <span class="w-space-no">Adom Bakery</span>
                            </td>
                            <td>Lapez</td>
                            <td>0277004028</td>
                            <td>Daniel</td>
                            <td>
                              <div class="d-flex">
                                <Link
                                  to="#"
                                  class="btn btn-primary shadow btn-xs sharp me-1"
                                  id="editIcon"
                                  data-bs-toggle="modal"
                                  data-bs-target="#basicModal"
                                >
                                  <i class="fas fa-eye"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                           */}

                          {riders?.map((rider) => (
                            <>
                              <tr key={rider.id}>
                                <td>{rider.id}</td>
                                <td>
                                  <span class="w-space-no">
                                    {rider.user.username}
                                  </span>
                                </td>
                                <td>{rider.user.email}</td>
                                <td>
                                  {rider.user.phone_number
                                    ? rider.user.phone_number
                                    : "No Number"}
                                </td>
                                <td>
                                  {rider.user.fullname
                                    ? rider.user.fullname
                                    : "Full Name"}
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      // onClick={() => setSelected(rider.user)}
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

export default AddRider;
