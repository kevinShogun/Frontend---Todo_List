import { FORM_TODO, OBTENER_TODO, AGREGAR_TODO, VALIDAR_FORM, ACTUAL_TODO, ELIMINAR_TODO } from "../../types";

export default (state, action) => {
	switch (action.type) {
		case FORM_TODO:
			return {
				...state,
				formulario: true,
			};
		case OBTENER_TODO:
			return {
				...state,
				ListItems: action.payload,
			};
		case AGREGAR_TODO:
			return {
				...state,
				ListItems: [action.payload, ...state.ListItems, ],
                error_form: false,
                formulario: false,
			};
		case VALIDAR_FORM:
			return {
				...state,
				error_form: true,
			};
            case ACTUAL_TODO:
                return{
                    ...state,
                    todo_select: state.ListItems.filter(proyecto=> proyecto.id === action.payload)
                }
            case ELIMINAR_TODO:
                return{
                    ...state,
                    ListItems: state.ListItems.filter(proyecto=> proyecto.id !== action.payload),
                    todo_select: null
                }
				
		default:
			return state;
	}
};
