import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function OrderModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-1">Customer Name:</label>
                    <input type="text" className="form-control" name="name" />
                  </div>

                  <div className="form-group">
                    <label>Customer Name:</label>
                    <input type="text" className="form-control" name="name" />
                  </div>

                  <div className="form-group">
                    <label>Package Category</label>
                    <select
                      type="select"
                      className="form-control"
                      name="phonenumber"
                    >
                      <option value="Anniversary">Anniversary</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Birthday">Special Celebration</option>
                      <option value="Birthday">Surprise</option>
                      <option value="Birthday">Gifts, Thank you</option>
                      <option value="Birthday">Valantine</option>
                      <option value="Birthday">Others</option>
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Add Products:</label>
                    <div id="multiselect">
                      <DropdownMultiselect
                        options={[
                          "Support",
                          "Sales",
                          "Admin System",
                          "4",
                          "5",
                          "6",
                        ]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Add-Ons:</label>
                    <div id="multiselect">
                      <DropdownMultiselect
                        options={[
                          "Free Candles",
                          "Plastic Knife",
                          "Chocolate",
                          "4",
                          "5",
                          "6",
                        ]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Upload:</label>
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" />
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="fs-12 fw500">Special Notes: </label>
                <textarea
                  className="form-control"
                  placeholder="Your message goes here ..."
                ></textarea>
              </div>

              <hr className="horizontalLine" />
              <div className="sweetalert  ">
                <button
                  onClick={() =>
                    swal(
                      "Good job!",
                      "Package has been added successfully!",
                      "success"
                    )
                  }
                  className="btn btn-primary btn-block sweet-success"
                  id="filter"
                >
                  Add Product
                </button>
              </div>
            </form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;
