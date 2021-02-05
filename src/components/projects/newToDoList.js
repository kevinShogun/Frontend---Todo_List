import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../contexts/projects/projectContext";

const NewToDoList = () => {
	//obtener el state del formulario

	const projectsContext = useContext(ProjectContext);

	const { formulario, mostrarFormulario } = projectsContext;

	//state para el TODO
	const [list, guardarList] = useState({
		NameTODO: "",
	});

	const { NameTODO } = list;

	// lee los contenidos del input
	const onChangeList = (e) => {
		guardarList({
			...list,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitToDO = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<Fragment>
				<button type="button" className="btn btn-primario btn-block"
					onClick={()=> mostrarFormulario()}
				>
					New To Do List
				</button>
				{formulario ? (
					<form className="formulario-nuevo-proyecto">
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
							onSubmit={onSubmitToDO}
						/>
					</form>
				) : null}
			</Fragment>
		</>
	);
};

export default NewToDoList;
