import React from "react";

export class User extends React.Component {
	constructor(props){
		super();
		console.log(props)
	}
	render(){
		return (
			<div>
				<h3>The User Page</h3>
				<p>User ID: {this.props.match.params.id}</p>
				<button className="btn btn-primary">Go Home! Not Working :(</button>
			</div>
		);
	}

}