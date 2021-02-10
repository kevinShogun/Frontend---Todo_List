import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import TodoLists from "./components/todoLists/TodoLists";

import TodoListState from "./context/todoLists/todoListState";
import TaskState from "./context/tasks/taskState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
	tokenAuth(token);
}

function App() {
	return (
		<TodoListState>
			<TaskState>
				<AlertaState>
					<AuthState>
						<Router>
							<Switch>
								<Route exact path="/" component={Login} />
								<Route exact path="/nueva-cuenta" component={NuevaCuenta} />
								<RutaPrivada exact path="/todoLists" component={TodoLists} />
							</Switch>
						</Router>
					</AuthState>
				</AlertaState>
			</TaskState>
		</TodoListState>
	);
}

export default App;
