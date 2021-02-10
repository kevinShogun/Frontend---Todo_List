import {
	FORMULARIO_TODOLIST,
	OBTENER_TODOLISTS,
	AGREGAR_TODOLIST,
	TODOLIST_ERROR,
	VALIDAR_FORMULARIO,
	TODOLIST_ACTUAL,
	ELIMINAR_TODOLIST,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case FORMULARIO_TODOLIST:
			return {
				...state,
				formulario: true,
			};
		case OBTENER_TODOLISTS:
			return {
				...state,
				todoLists: action.payload,
			};
		case AGREGAR_TODOLIST:
			return {
				...state,
				todoLists: [...state.todoLists, action.payload],
				formulario: false,
				errorformulario: false,
			};
		case VALIDAR_FORMULARIO:
			return {
				...state,
				errorformulario: true,
			};
		case TODOLIST_ACTUAL:
			return {
				...state,
				todoList: state.todoLists.filter(
					(todoList) => todoList._id === action.payload
				),
			};
		case ELIMINAR_TODOLIST:
			return {
				...state,
				todoLists: state.todoLists.filter(
					(todoList) => todoList._id !== action.payload
				),
				todoList: null,
			};
		case TODOLIST_ERROR:
			return {
				...state,
				mensaje: action.payload,
			};
		default:
			return state;
	}
};
