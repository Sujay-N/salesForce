import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaff';
import viewStaff from './ViewStaff';
import details from './DetailInfo';

import  Navbar  from './Navbar';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<Navbar/>

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
