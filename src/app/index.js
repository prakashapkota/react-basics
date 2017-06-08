require('../sass/main.scss');

import React from "react";
import { render } from "react-dom";
import { browserHistory} from "react-router";
import {BrowserRouter as Router, Route, Link, IndexRoute} from "react-router-dom";



import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        	<Root>
        		<Route exact path="/" component={Home}/>
        		<Route path="/home" component={Home}/>
        		<Route path="/user/:id" component={User}/>
        	</Root>
      </Router>
    )
  }
}

render(<App/>, window.document.getElementById('app'));