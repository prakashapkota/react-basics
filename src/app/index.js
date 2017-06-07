import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor(){
		super();
		this.state= {
			homeLink: "Home"
		};
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		})
	}

	onGreet(){
		alert('Hello');
	};
	render() {
		var user = {
			name: "Anna",
			hobbies: ["Sports", "Music"]
		};

		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home 
							name={"Max"} 
							initialAge={27} 
							user={user} 
							greet={this.onGreet}
							changeLink={this.onChangeLinkName.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));