import React, { useContext, useEffect } from "react";
import TodoList from "./TodoList";
import todoListContext from "../../context/todoLists/todoListContext";
import AlertaContext from "../../context/alertas/alertaContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoTodoLists = () => {
	// Extrar todoLists de state inicial
	const todoListsContext = useContext(todoListContext);
	const { mensaje, todoLists, obtenerTodoLists } = todoListsContext;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	// Obtener todoLists cuando carga el componente
	useEffect(() => {
		// si hay un error
		if (mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria);
		}

		obtenerTodoLists();
		// eslint-disable-next-line
	}, [mensaje]);

	// revisar si todoLists tiene contenido
	if (todoLists.length === 0)
		return <p>No hay todoLists, comienza creando uno</p>;

	return (
		<ul className="listado-todoLists">
			{alerta ? (
				<div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>
			) : null}

			<TransitionGroup>
				{todoLists.map((todoList) => (
					<CSSTransition key={todoList._id} timeout={200} classNames="todoList">
						<TodoList todoList={todoList} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
};

export default ListadoTodoLists;
