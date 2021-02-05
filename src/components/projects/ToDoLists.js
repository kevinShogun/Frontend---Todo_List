import React, { useContext } from "react";
import Item from "./List_item";
import ProjectContext from "../../contexts/projects/projectContext";

const ToDoLists = () => {

    //extraer Proyectos
	const projectsContext = useContext(ProjectContext);
	const { ListItems } = projectsContext;


    // revisda si hay Proyectos
    if(ListItems.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{ListItems.map((item) => (
				<Item key={ListItems.id} Items={item} />
			))}
		</ul>
	);
};

export default ToDoLists;
