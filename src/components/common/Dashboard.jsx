import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaff';
import viewStaff from './ViewStaff';
import details from './DetailInfo';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo03"
						aria-controls="navbarTogglerDemo03"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<a className="navbar-brand ml-2 text-info" href="#">
						SalesForce
					</a>

					<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
						<div className="offset-9">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item active">
									<Link to="/contact">
										{' '}
										<h5 className=" text-info mt-2"> Contact </h5>
									</Link>
								</li>
								<li className="nav-item mx-5">
									<Link to="/vision">
										<h5 className=" text-info mt-2"> Vision </h5>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="container">
					<div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 my-5">
						<h2 className="text-center text-info"> SalesForce Staff Records</h2>

						<div className="offset-3 my-3">
							<Link to="/addStaff">
								{' '}
								<button className="btn btn-lg btn-outline-info ml-1 "> AddStaff </button>
							</Link>
							<Link to="/viewStaff">
								<button className="btn btn-lg btn-info  ml-2"> ViewStaff </button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
