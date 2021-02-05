import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
	
    const initialState = {
		formulario : true
	};

	const [state, dispatch] = useReducer(projectReducer, initialState);

	return (
		<ProjectContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}

        </ProjectContext.Provider>
	);
};

export default ProjectState;
