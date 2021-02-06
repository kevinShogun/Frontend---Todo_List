import React, { useContext, useState } from "react";
import ProjectContext from "../../contexts/projects/projectContext";
import TaskContext from "../../contexts/task_Items/TaskContext";

const FormTask = () => {
	//extraer si un todo esta activo
	const projectsContext = useContext(ProjectContext);
	const { todo_select } = projectsContext;

	
	const tasksContext = useContext(TaskContext);
	const { obtenerTask, error_task, agregarTask, validarTask } = tasksContext;
	//state del formulario
	const [task, guardarTask] = useState({
		TaskName: '',

	});

	//extraer el nombre del formulario 
	const {TaskName} = task;

	// si no hay todo seleccionado
	if (!todo_select) return null;

	// Array destructuring para extraer el todo actual
	const [todo_actual] = todo_select;

	//lee valores del formulario 
	const handleChange = (e) =>{
		guardarTask({
			...task,
			[e.target.name] : e.target.value
		})
	}

	const onSubmit = (e) =>{
		e.preventDefault();
		//validar
		if(TaskName.trim() === ''){
			validarTask();
			return;
		}
		// pasar la validacion

		//agragegar nueva tarea al state de task 
		task.ToDoListId = todo_actual.id;
		task.estado = false;
		agregarTask(task);


		//obtener y filtrar las tareas del todo
		obtenerTask(todo_actual.id);

		// reiniciar el form
		guardarTask({
			TaskName: ''
		});

	}


	return (
		<div className="formulario">
			<form onSubmit={onSubmit}>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Name task..."
						name="TaskName"
						value={TaskName}
						onChange={handleChange}
					/>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-block btn-submit btn-primario"
						value="Add task"
					/>
				</div>
			</form>

			{error_task ? <p className="mensaje error">Error: The task is empty, the name is requied</p> : null}

		</div>
	);
};

export default FormTask;
