import React from "react";
import NuevoTodoList from "../todoLists/NuevoTodoList";
import ListadoTodoLists from "../todoLists/ListadoTodoLists";

const Sidebar = () => {
	return (
		<aside className="sombra">
			<h1>
				Todo<span>&nbsp;&nbsp;Lists</span> &nbsp;&nbsp; <box-icon name='clipboard' ></box-icon>
			</h1>

			<NuevoTodoList />

			<div className="todoLists">
				<h2>Tus Todo Lists  </h2>
				<ListadoTodoLists />
			</div>
		</aside>
	);
};

export default Sidebar;
