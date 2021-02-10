import React, { useReducer } from "react";

import todoListContext from "./todoListContext";
import todoListReducer from "./todoListReducer";
import {
	FORMULARIO_TODOLIST,
	OBTENER_TODOLISTS,
	AGREGAR_TODOLIST,
	TODOLIST_ERROR,
	VALIDAR_FORMULARIO,
	TODOLIST_ACTUAL,
	ELIMINAR_TODOLIST,
} from "../../types";

import clienteAxios from "../../config/axios";

const TodoListState = (props) => {
	const initialState = {
		todoLists: [],
		formulario: false,
		errorformulario: false,
		todoList: null,
		mensaje: null,
	};

	// Dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(todoListReducer, initialState);

	// Serie de funciones para el CRUD
	const mostrarFormulario = () => {
		dispatch({
			type: FORMULARIO_TODOLIST,
		});
	};

	// Obtener los todoLists
	const obtenerTodoLists = async () => {
		try {
			const resultado = await clienteAxios.get("/api/todoLists");

			dispatch({
				type: OBTENER_TODOLISTS,
				payload: resultado.data.todoLists,
			});
		} catch (error) {
			const alerta = {
				msg: "Hubo un error",
				categoria: "alerta-error",
			};

			dispatch({
				type: TODOLIST_ERROR,
				payload: alerta,
			});
		}
	};

	// Agregar nuevo todoList
	const agregarTodoList = async (todoList) => {
		try {
			const resultado = await clienteAxios.post("/api/todoLists", todoList);
			console.log(resultado);
			// Insertar el todoList en el state
			dispatch({
				type: AGREGAR_TODOLIST,
				payload: resultado.data,
			});
		} catch (error) {
			const alerta = {
				msg: "Hubo un error",
				categoria: "alerta-error",
			};

			dispatch({
				type: TODOLIST_ERROR,
				payload: alerta,
			});
		}
	};

	// Valida el formulario por errores
	const mostrarError = () => {
		dispatch({
			type: VALIDAR_FORMULARIO,
		});
	};

	// Selecciona el TodoList que el usuario dio click
	const todoListActual = (todoListId) => {
		dispatch({
			type: TODOLIST_ACTUAL,
			payload: todoListId,
		});
	};

	// Elimina un todoList
	const eliminarTodoList = async (todoListId) => {
		try {
			await clienteAxios.delete(`/api/todoLists/${todoListId}`);
			dispatch({
				type: ELIMINAR_TODOLIST,
				payload: todoListId,
			});
		} catch (error) {
			const alerta = {
				msg: "Hubo un error",
				categoria: "alerta-error",
			};

			dispatch({
				type: TODOLIST_ERROR,
				payload: alerta,
			});
		}
	};

	return (
		<todoListContext.Provider
			value={{
				todoLists: state.todoLists,
				formulario: state.formulario,
				errorformulario: state.errorformulario,
				todoList: state.todoList,
				mensaje: state.mensaje,
				mostrarFormulario,
				obtenerTodoLists,
				agregarTodoList,
				mostrarError,
				todoListActual,
				eliminarTodoList,
			}}
		>
			{props.children}
		</todoListContext.Provider>
	);
};

export default TodoListState;
