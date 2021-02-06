import React, {useContext} from "react";
import TaskContext from "../../contexts/task_Items/TaskContext";
import ProjectContext from "../../contexts/projects/projectContext";

const Task = ({task}) => {

	const projectsContext = useContext(ProjectContext);
	const { todo_select } = projectsContext;

	const tasksContext = useContext(TaskContext);
	const { elimianrTask, obtenerTask } = tasksContext;

	const[todo_actual]= todo_select;

	const itemEliminar = (id) =>{
		elimianrTask(id);
		obtenerTask(todo_actual.id);
	}

	return (
		<li className="tarea sombra">
			<p>{task.TaskName}</p>

			<div className="estado">
				{task.estado ? (
					<button type="button" className="completo">
						Completed
					</button>
				) : (
					<button type="button" className="incompleto">
						Uncompleted
					</button>
				)}
			</div>

            <div className="acciones">
                    <button type='button' className="btn btn-primario">Edit</button>
                    <button type='button' className="btn btn-secundario"
						onClick={ () => itemEliminar(task.id) }
					>Delete</button>
            </div>
		</li>
	);
};

export default Task;
