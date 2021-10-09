import React from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import Teampage from "./components/Teampage";

function App() {
	return (
		<div className="App">
			<Router>
				<Sidebar />
				<Header></Header>
				<Switch>
					<Route path="/ipmwebsite/ourteam" exact>
						<Teampage />
					</Route>
					<Route path="/ipmwebsite/ourgoal" exact></Route>
					<Route path="/ipmwebsite/devhistory" exact></Route>
					<Route path="/ipmwebsite/" exact>
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
