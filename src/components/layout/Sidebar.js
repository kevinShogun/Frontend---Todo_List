import React from "react";
import NuevoTodoList from "../todoLists/NuevoTodoList";
import ListadoTodoLists from "../todoLists/ListadoTodoLists";

const Sidebar = () => {
	return (
		<aside>
			<h1>
				Todo<span>Lists</span>
			</h1>

			<NuevoTodoList />

			<div className="todoLists">
				<h2>To Do Lists</h2>
				<ListadoTodoLists />
			</div>
		</aside>
	);
};

export default Sidebar;
