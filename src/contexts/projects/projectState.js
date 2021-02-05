import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_TODO } from "../../types";

const ProjectState = (props) => {
	const initialState = {
		ListItems: [
			{ id: 1, name: "Tareas Hogareñas" },
			{ id: 2, name: "Deberes Escoalres" },
			{ id: 3, name: "Obligaciones Laborales" },
		],

		formulario: false,
	};

	const [state, dispatch] = useReducer(projectReducer, initialState);

	const mostrarFormulario = () => {
		dispatch({
			type: FORM_TODO,
		});
	};

	return (
		<ProjectContext.Provider
			value={{
                ListItems: state.ListItems,
				formulario: state.formulario,
				mostrarFormulario,
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

export default ProjectState;
