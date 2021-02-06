import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../contexts/projects/projectContext";

const NewToDoList = () => {
	//obtener el state del formulario

	const projectsContext = useContext(ProjectContext);

	const { formulario, error_form, mostrarFormulario, agregarToDos, mostrarError } = projectsContext;

	//state para el TODO
	const [list, guardarList] = useState({
		NameTODO: "",
	},[]);

	const { NameTODO } = list;

	// lee los contenidos del input
	const onChangeList = (e) => {
		
		guardarList({
			...list,
			[e.target.name]: e.target.value,
		});
		console.log(NameTODO)
	};

	const onSubmitToDO = (e) => {
		e.preventDefault();
		//validar
		if(NameTODO.trim() === ''){
			mostrarError();
			return;
		}
		//agregar al state
		agregarToDos(list);

		guardarList({
			NameTODO: ""
		})

	};

	const onClick = () =>{
		mostrarFormulario();
	}

	return (
					<Fragment>
				<button type="button" className="btn btn-primario btn-block"
					onClick={onClick}
				>
					New To Do List
				</button>
				{formulario ? (
					<form className="formulario-nuevo-proyecto" onSubmit={onSubmitToDO}>
						<input
							type="text"
							className="input-text"
							placeholder="Name of ToDo List"
							name="NameTODO"
							value={NameTODO}
							onChange={onChangeList}
						/>
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Add ToDo List"
							
						/>
					</form>
				) : null}

				{
					error_form 
					?	<p className="mensaje error">Error: the name of To Do List is Requied</p>
					: null
				}
			</Fragment>
	);
};

export default NewToDoList;
