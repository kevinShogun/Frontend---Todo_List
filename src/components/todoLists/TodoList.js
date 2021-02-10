import React, { useContext } from "react";
import todoListContext from "../../context/todoLists/todoListContext";
import taskContext from "../../context/tasks/taskContext";

const TodoList = ({ todoList }) => {
	// Obtener el state de todoLists
	const todoListsContext = useContext(todoListContext);
	const { todoListActual } = todoListsContext;

	// obtener la función del context de task
	const tasksContext = useContext(taskContext);
	const { obtenerTasks } = tasksContext;

	// Función para agregar el todoList actual
	const seleccionarTodoList = (id) => {
		todoListActual(id); // Fijar un todoList actual
		obtenerTasks(id); // Filtrar las tasks cuando se de click
	};

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => seleccionarTodoList(todoList._id)}
			>
				{todoList.nombre}{" "}
			</button>
		</li>
	);
};

export default TodoList;
