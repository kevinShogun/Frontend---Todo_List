import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../contexts/projects/projectContext";
import TaskContext from "../../contexts/task_Items/TaskContext";

const ListTask = () => {
	
	//extraer Todos del state Inicial
	const projectsContext = useContext(ProjectContext);
	const { todo_select, eliminaToDo } = projectsContext;

	//obtener task del todo
	const tasksContext = useContext(TaskContext);
	const { task_todo } = tasksContext;

	// si no hay todo seleccionado 
	if(!todo_select) return <h2>Select a To Do List</h2>;

	// Array destructuring para extraer el todo actual
	const [todo_actual] = todo_select;	


	const onClickEliminaToDo = () =>{
		eliminaToDo(todo_actual.id);
	}

	return (
		<Fragment>
			<h2>ToDo List: {todo_actual.NameTODO}</h2>
			<ul className="listado-tareas">
				{task_todo.length === 0 ? (
					<li className="tarea">
						<p>Noting Today</p>
					</li>
				) : (
					task_todo.map((task) => <Task 
					key={task.id}
					task={task} />)
				)}
			</ul>
			<button type="button" className="btn btn-eliminar sombra"
				onClick={onClickEliminaToDo}
			>
				Delete ToDo List &times;
			</button>
		</Fragment>
	);
};

export default ListTask;
