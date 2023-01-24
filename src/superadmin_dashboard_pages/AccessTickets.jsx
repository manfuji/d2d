import React from "react";
import { Link } from "react-router-dom";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


class AccessTickets extends React.Component{
    render(){
        return(
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
                                <h3 className="font-w600 mb-0">Ticketing</h3>
                                <small className="mb-0 text-warning fs-12">Provide ticket details below. When reporting a problem make sure to provide as much relevant information as possible!</small>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            {/* First Card content */}
                            <div className='col-xl-12 col-lg-12'>
                                <div className='card' id="tickingForm">
                                    <div className='card-body'>
                                        <div className='basic-form'>
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className='form-row'>
                                                    <div className='form-group col-md-6'>
                                                        <label>
                                                            Support:
                                                        </label>
                                                        <div id='multiselect'>
                                                            <DropdownMultiselect
                                                                options={['Support', 'Sales', 'Admin System', '4', '5', '6']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='form-group col-md-6'>
                                                        <label>#ID</label>
                                                        <input
                                                            type='email'
                                                            className='form-control'
                                                            placeholder='#00654'
                                                        />
                                                    </div>
                                                    <div className='form-group col-md-12'>
                                                        <label>Subject</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Hello ...'
                                                        />
                                                    </div>

                                                    <div className='form-group col-md-12'>
                                                        <label>Message</label>
                                                        <textarea className='form-control' placeholder="Your message goes here ..."></textarea>
                                                    </div>
                                                </div>

                                                <div className='form-row'>
                                                    <div className='form-group col-md-2'>
                                                        <label>ReCapture</label>
                                                        <input type="text" className="form-control" placeholder="xQFti9" />
                                                    </div>
                                                    <div className='form-group col-md-2'>
                                                        <label>Type ReCapture</label>
                                                        <input type='text' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='form-group'>
                                                    <div className='form-check'>
                                                        <input className='form-check-input' type='checkbox' />
                                                        <label className='form-check-label'>Check me out</label>
                                                    </div>
                                                </div>
                                                <button type='submit' className='btn btn-primary' id="filter">
                                                    Submit Ticket
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Orders Summary */}


                        </div>
                        <hr />
                        <div className="form-head d-flex mb-3 align-items-start">
                            <div className="me-auto d-none d-lg-block">
                                <h3 className="font-w600 mb-0">Tickets Archive</h3>
                                {/* <small className="mb-0">Here is your payment history data!</small> */}
                            </div>

                            <span className="fs-13 ml-3">Tickets Opened: <span className="fs-13 ml-0 font-weight-bold ml-1">0</span></span>
                            <span className="fs-13 ml-3">Tickets Closed: <span className="fs-13 ml-0 font-weight-bold ml-1">1</span></span>
                        </div>

                        <div className="row">
                            <div class="col-lg-12">
                                
                                <div class="card" id="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Archive</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-responsive-md">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "50px" }}>
                                                            <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                <input type="checkbox" class="custom-control-input" id="checkAll" required="" />
                                                                <label class="custom-control-label" for="checkAll"></label>
                                                            </div>
                                                        </th>
                                                        <th># Order ID</th>
                                                        <th>Status</th>
                                                        <th>Department</th>
                                                        <th>Subject</th>
                                                        
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                <input type="checkbox" class="custom-control-input" id="customCheckBox2" required="" />
                                                                <label class="custom-control-label" for="customCheckBox2"></label>
                                                            </div>
                                                        </td>
                                                        <td>#00045</td>
                                                        <td><button className="btn btn-xs light btn-danger  fs-10">Closed</button></td>
                                                        <td>Suport</td>
                                                        <td>Payment Failed</td>
                                                        <td><button className="btn btn-xs light btn-primary  fs-10" id="filter">View</button></td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox checkbox-success check-lg me-3">
                                                                <input type="checkbox" class="custom-control-input" id="customCheckBox2" required="" />
                                                                <label class="custom-control-label" for="customCheckBox2"></label>
                                                            </div>
                                                        </td>
                                                        <td>#00045</td>
                                                        <td><button className="btn btn-xs light btn-success  fs-10">Open</button></td>
                                                        <td>Suport</td>
                                                        <td>Payment Failed</td>
                                                        <td><button className="btn btn-xs light btn-primary  fs-10" id="filter">View</button></td>

                                                    </tr>
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
        )
    }
}
export default AccessTickets;