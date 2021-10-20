import React from "react";
import Header from "./components/Header";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Teampage from "./components/Teampage";
import Goalpage from "./components/Goalpage";
import Devhistorypage from "./components/Devhistorypage";
import Assignments from "./components/Assignments";

function App() {
	return (
		<div className="App">
			<div className="Content">
				<Router>
					<Sidebar />
					<Header></Header>
					<Switch>
						<Route path="/ipmwebsite/ourteam" exact>
							<Teampage />
						</Route>
						<Route path="/ipmwebsite/ourgoal" exact>
							<Goalpage />
						</Route>
						<Route path="/ipmwebsite/devhistory" exact>
							<Devhistorypage />
						</Route>
						<Route path="/ipmwebsite/assignments" exact>
							<Assignments />
						</Route>
						<Route path="/ipmwebsite/" exact>
							<Homepage />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
