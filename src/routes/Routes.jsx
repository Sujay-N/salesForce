import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import AddStaff from '../components/common/AddStaff';
import  ViewStaff  from '../components/common/ViewStaff';
import { DetailInfo } from '../components/common/DetailInfo';
import Dashboard from '../components/common/Dashboard';
import Contact from '../components/common/Contact';
import Vision from '../components/common/Vision';

export default class Routes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" render={(props) => <Dashboard {...props} />} />
					<Route path="/contact" component={Contact} />
					<Route path="/vision" component={Vision} />

					<Route path="/addStaff" render={(props) => <AddStaff {...props} />} />

					<Route path="/viewStaff" render={(props) => <ViewStaff {...props} />} />
				</Switch>
			</div>
		);
	}
}
