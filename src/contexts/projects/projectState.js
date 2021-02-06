import React, { useReducer } from "react";
import uuid from 'react-uuid'

import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_TODO, OBTENER_TODO, AGREGAR_TODO, VALIDAR_FORM, ACTUAL_TODO, ELIMINAR_TODO} from "../../types";

const ProjectState = (props) => {
	const ListItems = [
		{ id: 1, NameTODO: "Tareas Hogareñas" },
		{ id: 2, NameTODO: "Deberes Escoalres" },
		{ id: 3, NameTODO: "Obligaciones Laborales" },
		{ id: 4, NameTODO: "MERN" },
	];

	const initialState = {
		ListItems: [],
		formulario: false,
		error_form: false,
		todo_select: null,
	};

	const [state, dispatch] = useReducer(projectReducer, initialState);

	const mostrarFormulario = () => {
		dispatch({
			type: FORM_TODO,
		});
	};

	//obtener los TODOS
	const obtenerToDoS = () => {
		
		dispatch({
			type: OBTENER_TODO,
			payload: ListItems,
		});
	};

	const agregarToDos = (ToDo) => {
		ToDo.id = uuid();

		dispatch({
			type: AGREGAR_TODO,
			payload: ToDo,
		});
	}

	//Valida formualrio
	const mostrarError = () =>{
		dispatch({
			type: VALIDAR_FORM
		})
	}

	//Selecciona el TODO
	const actualToDo = (proyectoId) =>{
		dispatch({
			type: ACTUAL_TODO,
			payload: proyectoId
		})
	}

	const eliminaToDo = (proyectoId) =>{
		dispatch({
			type: ELIMINAR_TODO,
			payload: proyectoId
		})
	}

	return (
		<ProjectContext.Provider
			value={{
				ListItems: state.ListItems,
				formulario: state.formulario,
				error_form: state.error_form,
				todo_select: state.todo_select,
				mostrarFormulario,
				obtenerToDoS,
				agregarToDos,
				mostrarError,
				actualToDo,
				eliminaToDo,
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

export default ProjectState;
