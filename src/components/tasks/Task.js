import React, { useContext } from "react";
import todoListContext from "../../context/todoLists/todoListContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
	// Extrar si un todoList esta activo
	const todoListsContext = useContext(todoListContext);
	const { todoList } = todoListsContext;

	// obtener la función del context de task
	const tasksContext = useContext(taskContext);
	const {
		eliminarTask,
		obtenerTasks,
		actualizarTask,
		guardarTaskActual,
	} = tasksContext;

	// Extraer el todoList
	const [todoListActual] = todoList;

	// Función que se ejecuta cuando el usuario presiona el btn de eliminar task
	const taskEliminar = (id) => {
		eliminarTask(id, todoListActual._id);
		obtenerTasks(todoListActual.id);
	};

	// Función que modifica el estado de las tasks
	const cambiarEstado = (task) => {
		if (task.estado) {
			task.estado = false;
		} else {
			task.estado = true;
		}
		actualizarTask(task);
	};

	// Agrega una task actual cuando el usuario desea editarla
	const seleccionarTask = (task) => {
		guardarTaskActual(task);
	};

	return (
		<li className="task sombra">
			<p>{task.nombre} </p>

			<div className="estado">
				{task.estado ? (
					<button
						type="button"
						className="completo"
						onClick={() => cambiarEstado(task)}
					>
						Completo
					</button>
				) : (
					<button
						type="button"
						className="incompleto"
						onClick={() => cambiarEstado(task)}
					>
						Incompleto
					</button>
				)}
			</div>

			<div className="acciones">
				<button
					type="button"
					className="btn btn-primario"
					onClick={() => seleccionarTask(task)}
				>
					Editar
				</button>

				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => taskEliminar(task._id)}
				>
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default Task;
