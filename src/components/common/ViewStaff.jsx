import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delStaff,setPerPg } from '../../redux/actions';

import Pagination from "../common/Pagination"

export class ViewStaff extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staffData: [],
			pageView :0,
		};
		console.log(this.props);
		console.log(this.props.staffData);
	}

	componentDidMount() {
		this.setState({
			staffData: this.props.staffData
		});
	}

	sortDec = () => {
		this.setState({
			staffData: this.props.staffData.sort((a, b) => b.sales - a.sales)
		});
	};

	sortInc = () => {
		this.setState({
			staffData: this.props.staffData.sort((a, b) => a.sales - b.sales)
		});
	};

	handlePageNum = (event) => {

        this.setState({
            pageView: event.target.value
        }, () => this.props.setPerPg(this.state.pageView))
    }

	

	render() {
		console.log(this.props.staffData);

		

		return (
			<div>
				<div className="container">
					<div className="col-8 offset-2">



						<table className="table table-hover table-dark my-5">
							<thead className="text-info font-weight-heavy">
								<tr>
									<th scope="col" className="text-center">Name</th>
									<th scope="col" className="text-center">Email</th>
									<th scope="col" className="text-center">Mobile</th>
									<th scope="col">
										Sales 
										<span>
											
											<button
												className="badge badge-pill badge-info"
												onClick={() => this.sortDec()}
											>
												High to low
											</button>
										</span>
										<span>
											<button
												className="badge badge-pill badge-info"
												onClick={() => this.sortInc()}
											>
												Low to High
											</button>
										</span>
									</th>
								</tr>
							</thead>

							<tbody>
								{this.props.staffData &&
									this.props.staffData.filter((a, i) => i >= this.props.perPage * (this.props.currentPage - 1) && i < this.props.perPage * (this.props.currentPage)).map((ele) => (
										<tr key={ele.key}>
											<td>{ele.name}</td>
											<td>{ele.email}</td>
											<td>{ele.mob}</td>
											<td className="text-center">{ele.sales}</td>
											<td><button onClick={() => this.props.delStaff(ele.key)} className="badge badge-pill badge-danger">Delete</button></td>
										</tr>
									))}
							</tbody>
						</table>


						<Pagination/>


						<div class="btn-group offset-4 mt-2 ">
                        <label className="text-info " for="limit">Items Per Page</label>
                        <select onChange={this.handlePageNum} class="custom-select" name="limit" id="limit">
                            <option selected>Per Page Limit</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
					</div>

				
						
					</div>
				</div>
			</div>
		);

	
	}
}

const mapStateToProps = (state) => ({
	staffData: state.staffData,
	// page: state.page,
	// perPage: state.perPage
	perPage: state.perPage,
    currentPage: state.currentPage
});

const mapDispatchToProps = (dispatch) => {

	return {
		delStaff: (key) => dispatch(delStaff(key)),
		setPerPg: (value) => dispatch(setPerPg(value)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStaff);
