import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


class OrderList extends React.Component {
	render() {
		return (
			<div className="App">

				<div id="preloader">
					<div id="status">
						<div class="spinner">
							<div class="double-bounce1"></div>
							<div class="double-bounce2"></div>
						</div>
					</div>
				</div>
				{/* <div id="preloader">
					<div className="sk-three-bounce">
						<div className="sk-child sk-bounce1"></div>
						<div className="sk-child sk-bounce2"></div>
						<div className="sk-child sk-bounce3"></div>
					</div>
				</div> */}

				<div id="main-wrapper">
					<div className="content-body">
						<div className="container-fluid">
							<div className="form-head d-flex mb-3 align-items-start">
								<div className="me-auto d-none d-lg-block">
									<h3 className="text-dark font-w600 mb-0">Orders</h3>
									<p className="mb-0 fs-12">Here is your order list data</p>
								</div>
								<div className="dropdown custom-dropdown">
									<button type="button" className="btn btn-primary btn-sm light d-flex align-items-center svg-btn" data-bs-toggle="dropdown" aria-expanded="false" id="filter">
										<svg width={16} className="scale5" height={16} viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16647 27.9558C9.25682 27.9856 9.34946 28.0001 9.44106 28.0001C9.71269 28.0001 9.97541 27.8732 10.1437 27.6467L21.5954 12.2248C21.7926 11.9594 21.8232 11.6055 21.6746 11.31C21.526 11.0146 21.2236 10.8282 20.893 10.8282H13.1053V0.874999C13.1053 0.495358 12.8606 0.15903 12.4993 0.042327C12.1381 -0.0743215 11.7428 0.0551786 11.5207 0.363124L0.397278 15.7849C0.205106 16.0514 0.178364 16.403 0.327989 16.6954C0.477614 16.9878 0.77845 17.1718 1.10696 17.1718H8.56622V27.125C8.56622 27.5024 8.80816 27.8373 9.16647 27.9558ZM2.81693 15.4218L11.3553 3.58389V11.7032C11.3553 12.1865 11.7471 12.5782 12.2303 12.5782H19.1533L10.3162 24.479V16.2968C10.3162 15.8136 9.92444 15.4218 9.44122 15.4218H2.81693Z"
											fill="#ffffff" /></svg>
										<span className="fs-13 ms-3">All Status</span>
										<i className="fa fa-angle-down scale5 ms-3"></i>
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<Link className="dropdown-item" to="#">2020</Link>
										<Link className="dropdown-item" to="#">2019</Link>
										<Link className="dropdown-item" to="#">2018</Link>
										<Link className="dropdown-item" to="#">2017</Link>
										<Link className="dropdown-item" to="#">2016</Link>
									</div>
								</div>
								<div className="dropdown custom-dropdown ms-3">
									<button type="button" className="btn btn-primary btn-sm light d-flex align-items-center svg-btn" data-bs-toggle="dropdown" aria-expanded="false" id="filter">
										<svg width={16} height={16} className="scale5" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z"
												fill="#ffffff" /></svg>
										<span className="fs-13 ms-3">Today</span>
										<i className="fa fa-angle-down scale5 ms-3"></i>
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<Link className="dropdown-item" to="#">Monday</Link>
										<Link className="dropdown-item" to="#">Tuesday</Link>
										<Link className="dropdown-item" to="#">Wednesday</Link>
										<Link className="dropdown-item" to="#">Thursday</Link>
										<Link className="dropdown-item" to="#">Friday</Link>
										<Link className="dropdown-item" to="#">Saturday</Link>
										<Link className="dropdown-item" to="#">Sunday</Link>
									</div>
								</div>
							</div>
							<hr />
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-body">
											<div className="table-responsive">
												<table id="example5" className=" table table-borderless display mb-4 dataTablesCard">
													<thead>
														<tr>
															<th>Order ID</th>
															<th>Date</th>
															<th>Customer Name</th>
															<th>Location</th>
															<th>Amount</th>
															<th>Status Order</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>#5552351</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>James WItcwicky</td>
															<td>Corner Street 5th London</td>
															<td>$164.52</td>
															<td><button className="btn btn-sm light btn-warning w-space-no fs-10">New Order</button></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-primary me-2"></i> Accept Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Reject Order</Link>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>#5552397</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>David Horison</td>
															<td>981 St. John’s Road London</td>
															<td>$24.55</td>
															<td><span class="btn btn-sm light btn-primary w-space-no">On Delivery</span></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-primary me-2"></i> Accept Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Reject Order</Link>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>#5552397</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>Rendy Greenlee</td>
															<td>32 The Green London</td>
															<td>$251.16</td>
															<td><span class="btn btn-sm light btn-success">Delivered</span></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-primary me-2"></i> Accept Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Reject Order</Link>
																	</div>
																</div>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>

							<hr />

							<div className="row">
								<div className="me-auto d-none d-lg-block">
									<h3 className="text-dark font-w600 mb-0">Confirmed Orders</h3>
									<p className="mb-0 fs-12">Here is your Confirmeded order list data</p>
								</div>

								<div className="col-12">
									<br />
									<div className="card">
										<div className="card-body">
											<div className="table-responsive">
												<table id="example5" className=" table table-borderless display mb-4 dataTablesCard">
													<thead>
														<tr>
															<th>Order ID</th>
															<th>Date</th>
															<th>Customer Name</th>
															<th>Location</th>
															<th>Amount</th>
															<th>Status Order</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>#5552351</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>James WItcwicky</td>
															<td>Corner Street 5th London</td>
															<td>$164.52</td>
															<td><span class="text-success w-space-no"><b>Confirmed</b> </span></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-success me-2"></i> Confirm Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Denial Order</Link>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>#5552397</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>David Horison</td>
															<td>981 St. John’s Road London</td>
															<td>$24.55</td>
															<td><span class="text-success w-space-no"><b>Confirmed</b> </span></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-success me-2"></i> Confirm Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Denial Order</Link>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>#5552397</td>
															<td class="w-space-no">26 March 2020, 12:42 AM</td>
															<td>Rendy Greenlee</td>
															<td>32 The Green London</td>
															<td>$251.16</td>
															<td><span class="text-success w-space-no"><b>Confirmed</b> </span></td>
															<td>
																<div class="dropdown ms-auto text-right">
																	<div class="btn-link" data-bs-toggle="dropdown">
																		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
																	</div>
																	<div class="dropdown-menu dropdown-menu-right">
																		<Link class="dropdown-item" to="#"><i class="las la-check-square scale5 text-success me-2"></i> Confirm Order</Link>
																		<Link class="dropdown-item" to="#"><i class="las la-times-circle scale5 text-danger me-2"></i> Denial Order</Link>
																	</div>
																</div>
															</td>
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
		);
	}
}
export default OrderList;