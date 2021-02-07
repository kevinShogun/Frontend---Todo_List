import React, { useContext, useEffect } from "react";
import Proyecto from "./List_item";
import ProjectContext from "../../contexts/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ToDoLists = () => {
	//extraer Proyectos
	const projectsContext = useContext(ProjectContext);
	const { ListItems, obtenerToDoS } = projectsContext;

	//obtener Todos cuando carga el componente
	useEffect(() => {
		obtenerToDoS();
		// eslint-disable-next-line
	}, []);

	// revisda si hay Proyectos
	if (ListItems.length === 0)
		return <p>no To Do List starts by creating one!</p>;

	return (
		<ul className="listado-proyectos">
			<TransitionGroup>
				{ListItems.map((proyecto) => (
					<CSSTransition key={proyecto.id} timeout={1000} classNames='proyecto'>
						<Proyecto  proyecto={proyecto} />
					</CSSTransition>
					
				))}
			</TransitionGroup>
		</ul>
	);
};

export default ToDoLists;
