import React, { useContext } from "react";
import ProjectContext from "../../contexts/projects/projectContext";
import TaskContext from "../../contexts/task_Items/TaskContext";

const Proyecto = ({ proyecto }) => {
	const projectsContext = useContext(ProjectContext);
	const { actualToDo } = projectsContext;

	const tasksContext = useContext(TaskContext);
	const { obtenerTask } = tasksContext;

	const seleccionarToDo = (id) => {
		actualToDo(id);
		obtenerTask(id);
	};

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={ () => seleccionarToDo(proyecto.id) }
			>
				{proyecto.NameTODO}
			</button>
		</li>
	);
};

export default Proyecto;
