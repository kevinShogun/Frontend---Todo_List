import React, { Fragment, useContext } from "react";
import Task from "./Task";
import todoListContext from "../../context/todoLists/todoListContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTasks = () => {
	// Extrar todoLists de state inicial
	const todoListsContext = useContext(todoListContext);
	const { todoList, eliminarTodoList } = todoListsContext;

	// obtener las tasks del todoList
	const tasksContext = useContext(taskContext);
	const { taskstodoList } = tasksContext;

	// Si no hay todoList seleccionado
	if (!todoList) return <h2>Selecciona un todoList</h2>;

	// Array destructuring para extraer el todoList actual
	const [todoListActual] = todoList;

	// Elimina un todoList
	const onClickEliminar = () => {
		eliminarTodoList(todoListActual._id);
	};

	return (
		<Fragment>
			<h2> <i class="fas fa-list-ul"></i> &nbsp; Todo List: {todoListActual.nombre} </h2>

			<ul className="listado-tasks">
				{taskstodoList.length === 0 ? (
					<li className="task">
						<p>No hay tasks  </p> <box-icon name='task-x' ></box-icon>
						
					</li>
				) : (
					<TransitionGroup>
						{taskstodoList.map((task) => (
							<CSSTransition key={task.id} timeout={200} classNames="task">
								<Task task={task} />
							</CSSTransition>
						))}
					</TransitionGroup>
				)}
			</ul>

			<button
				type="button"
				className="btn btn-eliminar sombra"
				onClick={onClickEliminar}
			>
				Eliminar TodoList &times;
			</button>
		</Fragment>
	);
};

export default ListadoTasks;
