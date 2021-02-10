import React, { useContext, useState, useEffect } from "react";
import todoListContext from "../../context/todoLists/todoListContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
	// Extrar si un todoList esta activo
	const todoListsContext = useContext(todoListContext);
	const { todoList } = todoListsContext;

	// obtener la función del context de task
	const tasksContext = useContext(taskContext);
	const {
		taskseleccionada,
		errortask,
		agregarTask,
		validarTask,
		obtenerTasks,
		actualizarTask,
		limpiarTask,
	} = tasksContext;

	// Effect que detecta si hay una task seleccionada
	useEffect(() => {
		if (taskseleccionada !== null) {
			guardarTask(taskseleccionada);
		} else {
			guardarTask({
				nombre: "",
			});
		}
	}, [taskseleccionada]);

	// State del formulario
	const [task, guardarTask] = useState({
		nombre: "",
	});

	// extraer el nombre del todoList
	const { nombre } = task;

	// Si no hay todoList seleccionado
	if (!todoList) return null;

	// Array destructuring para extraer el todoList actual
	const [todoListActual] = todoList;

	// Leer los valores del formulario
	const handleChange = (e) => {
		guardarTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// validar
		if (nombre.trim() === "") {
			validarTask();
			return;
		}

		// Si es edición o si es nueva task
		if (taskseleccionada === null) {
			// agregar la nueva task al state de tasks
			task.todoList = todoListActual._id;
			agregarTask(task);
		} else {
			// actualizar task existente
			actualizarTask(task);

			// Elimina taskseleccionada del state
			limpiarTask();
		}
		// Obtener y filtrar las tasks del todoList actual
		obtenerTasks(todoListActual.id);

		// reiniciar el form
		guardarTask({
			nombre: "",
		});
	};

	return (
		<div className="formulario">
			<form onSubmit={onSubmit}>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Task..."
						name="nombre"
						value={nombre}
						onChange={handleChange}
					/>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value={taskseleccionada ? "Editar Task" : "Agregar Task"}
					/>
				</div>
			</form>

			{errortask ? (
				<p className="mensaje error">El nombre del Item es obligatorio</p>
			) : null}
		</div>
	);
};

export default FormTask;
