import React, { useContext, useEffect } from "react";
import Proyecto from "./List_item";
import ProjectContext from "../../contexts/projects/projectContext";

const ToDoLists = () => {
	//extraer Proyectos
	const projectsContext = useContext(ProjectContext);
	const { ListItems, obtenerToDoS } = projectsContext;

	//obtener Todos cuando carga el componente
	useEffect(() => {
		obtenerToDoS();
	}, []);

	// revisda si hay Proyectos
	if (ListItems.length === 0) return <p>no To Do List starts by creating one!</p>;
	
	

	return (
		<ul className="listado-proyectos">
			{ListItems.map((proyecto) => (
				<Proyecto 
				key={proyecto.id}
				proyecto={proyecto} />
				
			))}
			
		</ul>
	);
};

export default ToDoLists;
