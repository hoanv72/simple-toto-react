import React, { Component } from 'react';

export class Task extends Component {
	constructor(props){
		super(props);
		this.state = {
			task: '',
			id:'',
			items: []
		}
	}
	handleChange = event =>{
		this.setState({
			task : event.target.value
		});
	}

	handleSubmit = event =>{
		event.preventDefault();
		this.setState({
			task: "",
			items: [...this.state.items, this.state.task]
		});

	}
	handleDelete = (val, event) =>{
		event.preventDefault();
		var data = [...this.state.items];

		data.filter( (item, index) => {
			if(index === val){
				data.splice(index, 1);
			}
		});
		this.setState({items: [...data]})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="taskName"> Task name </label>
						<input className="form-control" type="text" id="taskName" onChange={this.handleChange} value={this.state.task} />
					</div>

					<button type="submit" className="btn btn-success btn-block">Submit</button>
				</form>

				<table className="table mt-3">
					{this.state.items.map((item, index) =>{
						return ( 
						<tr>
							<td key={index} className="text-left" >
								{item}
							</td>
							<td className="text-right">
								<button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this, index)} >Delete</button>
							</td>
						</tr>
					)})}
				</table> 
			</div>
		);
	}
}

export default Task