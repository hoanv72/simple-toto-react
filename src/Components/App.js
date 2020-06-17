import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';

export class App extends Component {


	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h1 className="text-center">SIMPLE TODO</h1>
						<Task/>
					</div>
				</div>
			</div>
		);
	}
}

export default App