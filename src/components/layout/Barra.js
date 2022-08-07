import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import TaskContext from "../../context/tasks/taskContext";

const Barra = () => {
	// Extraer la información de autenticación
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

	const tasksContext = useContext(TaskContext);
	const { limpiarTask } = tasksContext;

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

	function refreshPage() {
		cerrarSesion();
		limpiarTask();
	}

	return (
		<header className="app-header sombra">
			{usuario ? (
				<p className="nombre-usuario">
					Hola <span>{usuario.nombre} </span>{" "}
				</p>
			) : null}

			<nav className="nav-principal">
				<button
					type="submit"
					className="btn btn-blank cerrar-sesion"
					onClick={refreshPage}
				>
					Cerrar Sesión &nbsp; 
					<i className="fas fa-sign-out-alt"></i>
				</button>
			</nav>
		</header>
	);
};

export default Barra;
