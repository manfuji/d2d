import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loader from "../components/utils/Loader";
import MessageAlert from "../components/utils/message";

const AddCategory = () => {
  const user = useSelector((state) => state.auth.user);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.access}`,
    },
  };
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);
  const [selected, setSelected] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.is_superuser) {
      return navigate("/");
    }
  }, [user]);
  const initialstate = {
    fullname: "",
  };

  const [formData, setFormData] = useState(initialstate);

  const [createdVendor, setCreatedVendor] = useState({});
  const [coverPhoto, setCoverPhoto] = useState(null);

  const onchangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", coverPhoto);
    formdata.append("name", formData.fullname);
    console.log(coverPhoto);

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "/shop/package-category/",
        formdata,
        config
      )
      .then((response) => {
        setCreatedVendor(response.data);
        // setLoading(false);
        setCreated(true);
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

  console.log(createdVendor);

  useEffect(() => {
    // vendors
    axios
      .get(process.env.REACT_APP_BASE_URL + "/shop/package-category")
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [created]);

  console.log("=======>", category);
  if (loading) return <Loader />;
  return (
    <div className="App">
      <div>
        <div className="content-body">
          {/* Row */}
          <div className="container-fluid">
            <div className="form-head d-flex mb-3 align-items-start">
              <div className="me-auto d-none d-lg-block">
                <h3 className="font-w600 mb-0">Add Category</h3>
                <small className="mb-0">Welcome to add Category page!</small>
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
                  <i class="fa fa-plus" aria-hidden="true"></i> Category{" "}
                  {/* <img src="images/icons/plus.svg" width={20} alt="icons" /> */}
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModalCenter">
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add New Category</h5>
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
                                <h6 className="size">Name</h6>
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
                            <div className="col-lg-12 mb-0">
                              <button className="btn btn-block" id="login">
                                Add Category
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
                            <div className="col">
                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size"> Name</h6>
                                  {/* <img src="images/icons/user.svg" className="fea icon-sm icons" id="okay" alt="user" /> */}
                                  <span>{selected.name}</span>
                                </div>
                              </div>
                              {/* <!--end col--> */}

                              <div class="col-md-6">
                                <div class="form-group position-relative">
                                  <h6 className="size">Image</h6>
                                  {/* <img src="images/icons/mail.svg" className="fea icon-sm icons" id="okay" alt="address" /> */}
                                  <img
                                    src={
                                      process.env.REACT_APP_BASE_URL +
                                      selected.image
                                    }
                                    height={200}
                                    width={200}
                                    alt={selected.name}
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                          </form>
                        </div>
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
                            <th>Category Name</th>
                            <th>Picture</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category?.map((category) => (
                            <>
                              <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>
                                  <span class="w-space-no">
                                    {category.name
                                      ? category.name
                                      : "No shop name"}
                                  </span>
                                </td>

                                <td>
                                  <img
                                    src={
                                      process.env.REACT_APP_BASE_URL +
                                      category.image
                                    }
                                    height={50}
                                    width={50}
                                    alt={category.name}
                                  />
                                </td>
                                <td>
                                  <div class="d-flex">
                                    <span
                                      onClick={() => setSelected(category)}
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
export default AddCategory;
