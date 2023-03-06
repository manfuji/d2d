import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import MessageAlert from "../components/utils/message";

const ManageVendors = () => {
  const [createdVendor, setCreatedVendor] = useState({});

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [companyLogo, setcompanyLogo] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, []);
  const initialstate = {
    fullname: selected?.fullname,
    email: selected?.email,
    phone_number: selected?.phone_number,
    // gps_address: selected?.address,
    gender: selected?.gender,
    dob: selected?.dob,
    shop_name: selected?.shop_name,
    latitude: selected?.latitude,
    // registration: selected?.,
    address: selected?.address,
    longitude: selected?.longitude,
    managers_number: selected?.managers_number,
    number_of_employees: selected?.number_of_employees,
    description: selected?.longitude,
    // profile: selected?.,
    // user?name: selected?.user.,
    // password: selected?.user.,
  };
  const [formData, setFormData] = useState(initialstate);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.access}`,
    },
  };

  const onchangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

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
        process.env.REACT_APP_BASE_URL + "/vender-register/",
        formdata,
        config
      )
      .then((response) => {
        setCreatedVendor(response.data);
        // setLoading(false);
        // setCreated(true);
        <MessageAlert
          title={"Created"}
          message={"Vendor created sucessfully"}
          type={"success"}
        />;
      })
      .catch((err) => (
        <MessageAlert
          title={"failed"}
          message={err.data.detail}
          type={"success"}
        />
      ));
  };

  useEffect(() => {
    // vendors
    axios
      .get(process.env.REACT_APP_BASE_URL + "/admin/vendors", config)
      .then((response) => {
        setVendors(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user.access]);
  console.log(selected);

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
                <h3 className="font-w600 mb-0">Manage Vendors</h3>
                <small className="mb-0">Welcome to manage vendor's page!</small>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="">
                {/* <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" id="filter" style={{ width: "15%", float: "right" }}>New Vendor <img src="images/icons/plus.svg" width={20} alt="icons" /></button> */}

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
                          <h5 class="modal-title">Vendor Details</h5>
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
                                    name="fullname"
                                    required
                                    value={selected?.fullname}
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
                                  <input
                                    type="text"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="gender"
                                    required
                                    value={formData.gender}
                                    onChange={onchangeHandler}
                                  />
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
                                  <h6 className="size">Shop Name</h6>
                                  {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                  <input
                                    type="text"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="shop_name"
                                    required
                                    value={formData.shop_name}
                                    onChange={onchangeHandler}
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Shop Location</h6>
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
                                    Shop Registration Details
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
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Location on Map</h6>
                                  {/* <img src="images/icons/map-pin.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                  <input
                                    type="text"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="gps_address"
                                    required
                                    value={formData.gps_address}
                                    onChange={onchangeHandler}
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              {/* <!--end col--> */}
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Number of Employees</h6>
                                  {/* <img src="images/icons/shop.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                  <input
                                    type="text"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="number_of_employees"
                                    required
                                    value={formData.number_of_employees}
                                    onChange={onchangeHandler}
                                  />
                                </div>
                              </div>
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
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Manager’s Number</h6>
                                  {/* <img src="images/icons/hash.svg" className="fea icon-sm icons" id="okay" alt="mail" /> */}
                                  <input
                                    type="number"
                                    class="form-control pl-5"
                                    placeholder=""
                                    name="managers_number"
                                    required
                                    value={formData.managers_number}
                                    onChange={onchangeHandler}
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
                                    required
                                    onChange={(e) =>
                                      setCoverPhoto(e.target.files[0])
                                    }
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              {/* <!--end col--> */}
                              <div className="col-lg-12 mb-0">
                                <button className="btn btn-block" id="login">
                                  Update Vendor
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
                            <th>Shop Name</th>
                            <th>Location</th>
                            <th>Contact</th>
                            <th>Owner Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vendors?.map((vendor) => (
                            <>
                              <tr key={vendor.id}>
                                <td>{vendor.id}</td>
                                <td>
                                  <span class="w-space-no">
                                    {vendor.shop_name
                                      ? vendor.shop_name
                                      : "No shop name"}
                                  </span>
                                </td>
                                <td>
                                  {vendor.address
                                    ? vendor.address
                                    : "No address"}
                                </td>
                                <td>
                                  {vendor.user.phone_number
                                    ? vendor.user.phone_number
                                    : "No number"}
                                </td>
                                <td>{vendor.user.username}</td>
                                <td>
                                  <div class="d-flex">
                                    <Link
                                      to="#"
                                      class="btn btn-primary shadow btn-xs sharp me-1"
                                      id="editIcon"
                                      data-bs-toggle="modal"
                                      data-bs-target="#basicModal"
                                      onClick={() => setSelected(vendor.user)}
                                    >
                                      <i class="fas fa-pencil-alt"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      onClick={() => {
                                        swal({
                                          title: "Are you sure?",
                                          text: "Once deleted, you will not be able to recover this imaginary file!",
                                          icon: "warning",
                                          buttons: true,
                                          dangerMode: true,
                                        }).then((willDelete) => {
                                          if (willDelete) {
                                            swal(
                                              "Poof! Vendor has been deleted!",
                                              {
                                                icon: "success",
                                              }
                                            );
                                          } else {
                                            swal("Your file is safe!");
                                          }
                                        });
                                      }}
                                      class="btn btn-danger shadow btn-xs sharp sweet-confirm"
                                    >
                                      <i class="fa fa-trash"></i>
                                    </Link>
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

export default ManageVendors;
