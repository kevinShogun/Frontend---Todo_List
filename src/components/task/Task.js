import React, { useContext } from "react";
import TaskContext from "../../contexts/task_Items/TaskContext";
import ProjectContext from "../../contexts/projects/projectContext";

const Task = ({ task }) => {
	const projectsContext = useContext(ProjectContext);
	const { todo_select } = projectsContext;

	const tasksContext = useContext(TaskContext);
	const {  elimianrTask, obtenerTask, estadoTask, actualTask } = tasksContext;

	const [todo_actual] = todo_select;

	const itemEliminar = (id) => {
		elimianrTask(id);
		obtenerTask(todo_actual.id);
	};

	const cambiarStateTask = (task) => {
		if(task.estado){
			task.estado = false;
		}else{
			task.estado = true;
		}

		estadoTask(task);
	};

	const editartTask = (task) =>{
		actualTask(task);
	}

	return (
		<li className="tarea sombra">
			<p>{task.TaskName}</p>

			<div className="estado">
				{task.estado ? (
					<button
						type="button"
						className="completo"
						onClick={() => cambiarStateTask(task)}
					>
						Completed
					</button>
				) : (
					<button
						type="button"
						className="incompleto"
						onClick={() => cambiarStateTask(task)}
					>
						Uncompleted
					</button>
				)}
			</div>

			<div className="acciones">
				<button type="button" className="btn btn-primario"
				onClick={ () => editartTask(task)}
				>
					Edit
				</button>
				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => itemEliminar(task.id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Task;
