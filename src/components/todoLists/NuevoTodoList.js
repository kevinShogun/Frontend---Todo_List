import React, { Fragment, useState, useContext } from "react";
import todoListContext from "../../context/todoLists/todoListContext";

const NuevoTodoList = () => {
	// Obtener el state del formulario
	const todoListsContext = useContext(todoListContext);
	const {
		formulario,
		errorformulario,
		mostrarFormulario,
		agregarTodoList,
		mostrarError,
	} = todoListsContext;

	// State para TodoList
	const [todoList, guardarTodoList] = useState({
		nombre: "",
	});

	// Extraer nombre de todoList
	const { nombre } = todoList;

	// Lee los contenidos del input
	const onChangeTodoList = (e) => {
		guardarTodoList({
			...todoList,
			[e.target.name]: e.target.value,
		});
	};

	// Cuando el usuario envia un todoList
	const onSubmitTodoList = (e) => {
		e.preventDefault();

		// Validar el todoList
		if (nombre === "") {
			mostrarError();
			return;
		}

		// agregar al state
		agregarTodoList(todoList);

		// Reiniciar el form
		guardarTodoList({
			nombre: "",
		});
	};

	// Mostrar el formulario
	const onClickFormulario = () => {
		mostrarFormulario();
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={onClickFormulario}
			>
				Nuevo TodoList
				&nbsp;&nbsp;
				
			</button>

			{formulario ? (
				<form className="formulario-nuevo-todoList" onSubmit={onSubmitTodoList}>
					<input
						type="text"
						className="input-text"
						placeholder="Nombre TodoList"
						name="nombre"
						value={nombre}
						onChange={onChangeTodoList}
					/>

					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Agregar TodoList"
					/>
				</form>
			) : null}

			{errorformulario ? (
				<p className="mensaje error">El nombre del TodoList es obligatorio</p>
			) : null}
		</Fragment>
	);
};

export default NuevoTodoList;
