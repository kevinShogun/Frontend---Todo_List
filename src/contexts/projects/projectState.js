import React from 'react'
import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {

    const initialState ={
        formToDo: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)


    return( 
        <projectContext.Provider
            value={{
                next: state.formToDo
            }}
        >
            {props.childre}
        </projectContext.Provider>
    );

}

export default ProjectState;