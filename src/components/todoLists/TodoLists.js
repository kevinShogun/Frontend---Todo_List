import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTask from "../tasks/FormTask";
import ListadoTasks from "../tasks/ListadoTasks";
import AuthContext from "../../context/autenticacion/authContext";

const TodoLists = () => {
	// Extraer la información de autenticación
	const authContext = useContext(AuthContext);
	const { usuarioAutenticado } = authContext;

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="contenedor-app">
			<Sidebar />

			<div className="seccion-principal">
				<Barra />

				<main>
					<FormTask />

					<div className="contenedor-tasks">
						<ListadoTasks />
					</div>
				</main>
			</div>
		</div>
	);
};

export default TodoLists;
