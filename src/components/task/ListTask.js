import React, { Fragment } from "react";
import Task from "./Task";

const ListTask = () => {
	const tasksToDo = [
		{ TaskName: "Iniciar el E-commerce de la Farmacia", estado: true },
		{ TaskName: "Terminar el Widget de contactos en Flutter", estado: false },
		{
			TaskName: "Normalizar la bd del restaurante que esta en azureSql",
			estado: false,
		},
		{
			TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
			estado: true,
		},
	];

	return (
		<Fragment>
			<h2>ToDo List: Obligaciones Laborales</h2>
			<ul className="listado-tareas">
				{tasksToDo.length === 0 ? (
					<li className="tarea">
						<p>Noting Today</p>
					</li>
				) : (
					tasksToDo.map((task) => <Task task={task} />)
				)}
                
			</ul>
            <button type='button' className="btn btn-eliminar sombra">Delete ToDo List &times;</button>
		</Fragment>
	);
};

export default ListTask;
