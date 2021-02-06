import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from "./contexts/projects/projectState";
import TaskState from "./contexts/task_Items/TaskState";

function App() {
	return (
		<ProjectState>
			<TaskState>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/new-account" component={NewAccount} />
						<Route exact path="/projects" component={Projects} />
					</Switch>
				</Router>
			</TaskState>
		</ProjectState>
	);
}

export default App;
