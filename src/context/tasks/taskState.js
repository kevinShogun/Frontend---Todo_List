import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import {
	TASKS_TODOLIST,
	AGREGAR_TASK,
	VALIDAR_TASK,
	ELIMINAR_TASK,
	TASK_ACTUAL,
	ACTUALIZAR_TASK,
	LIMPIAR_TASK,
} from "../../types";

import clienteAxios from "../../config/axios";

const TaskState = (props) => {
	const initialState = {
		taskstodoList: [],
		errortask: false,
		taskseleccionada: null,
	};

	// Crear dispatch y state
	const [state, dispatch] = useReducer(TaskReducer, initialState);

	// Crear las funciones

	// Obtener las tasks de un todoList
	const obtenerTasks = async (todoList) => {
		try {
			const resultado = await clienteAxios.get("/api/tasks", {
				params: { todoList },
			});
			// console.log(resultado.data.tasks);
			dispatch({
				type: TASKS_TODOLIST,
				payload: resultado.data.tasks,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Agregar una task al todoList seleccionado
	const agregarTask = async (task) => {
		try {
			const resultado = await clienteAxios.post("/api/tasks", task);
			// console.log(resultado.status);
			dispatch({
				type: AGREGAR_TASK,
				payload: resultado.data.task,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Valida y muestra un error en caso de que sea necesario
	const validarTask = () => {
		dispatch({
			type: VALIDAR_TASK,
		});
	};

	// Eliminar task por id
	const eliminarTask = async (id, todoList) => {
		try {
			await clienteAxios.delete(`/api/tasks/${id}`, { params: { todoList } });
			dispatch({
				type: ELIMINAR_TASK,
				payload: id,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Edita o modifica una task
	const actualizarTask = async (task) => {
		try {
			const resultado = await clienteAxios.put(`/api/tasks/${task._id}`, task);

			dispatch({
				type: ACTUALIZAR_TASK,
				payload: resultado.data.task,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Extrae una task para edición
	const guardarTaskActual = (task) => {
		dispatch({
			type: TASK_ACTUAL,
			payload: task,
		});
	};

	// Elimina la taskseleccionada
	const limpiarTask = () => {
		dispatch({
			type: LIMPIAR_TASK,
		});
	};

	return (
		<TaskContext.Provider
			value={{
				taskstodoList: state.taskstodoList,
				errortask: state.errortask,
				taskseleccionada: state.taskseleccionada,
				obtenerTasks,
				agregarTask,
				validarTask,
				eliminarTask,
				guardarTaskActual,
				actualizarTask,
				limpiarTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskState;
