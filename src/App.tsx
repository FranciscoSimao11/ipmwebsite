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
					<Route path="/ourteam" exact>
						<Teampage />
					</Route>
					<Route path="/ourmission" exact></Route>
					<Route path="/devhistory" exact></Route>
					<Route path="/" exact>
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
