import React, { Component } from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid-random';

import { addStaff } from '../../redux/actions';

import  Navbar  from './Navbar';

class AddStaff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			mob: 0,
			sales: 0,
			key: uuid()
		};
	}

	componentDidMount() {
		console.log(this.props.addStaff);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: [ e.target.value ]
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const staffDetails = {
			name: this.state.name,
			email: this.state.email,
			mob: this.state.mob,
			sales: this.state.sales,
			key: this.state.key
		};
		console.log(staffDetails);
		console.log(this.props.addStaff);
		this.props.addStaff(staffDetails);

		this.setState({
			...this.state,
			name: '',
			email: '',
			mob: '',
			sales: 0
		});

		alert('Success');
	};

	render() {
		return (
			<div>
			<Navbar/>
				<h2 className="text-info text-center my-3">Add New Staff Details</h2>

				<div className="col-4 offset-4">
					<form className="form-group form-control">
						<label>
							Name:
							<input
								className="ml-4 mt-2"
								type="text"
								name="name"
								placeholder="Enter Name"
								onChange={this.handleChange}
								value={this.state.name}
							/>
						</label>

						<label>
							Email ID:
							<input
								className="ml-2 mt-2"
								type="email"
								name="email"
								placeholder="Enter Email ID"
								onChange={this.handleChange}
								value={this.state.email}
							/>
						</label>

						<label>
							Mobile:
							<input
							className="ml-3 mt-2"
								type="number"
								name="mob"
								placeholder="Enter Mobile No"
								onChange={this.handleChange}
								value={this.state.mob}
							/>
						</label>

						<label >
							Sales FY:
							<input
							className="ml-2 mt-2"
								type="number"
								name="sales"
								placeholder="Enter Sales FY 19-20"
								onChange={this.handleChange}
								value={this.state.sales}
							/>
						</label>
					</form>

					<button className="btn btn-lg btn-info offset-4 my-2" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		addStaff: (staffDetails) => dispatch(addStaff(staffDetails))
	};
};

export default connect(null, mapDispatchToProps)(AddStaff);
