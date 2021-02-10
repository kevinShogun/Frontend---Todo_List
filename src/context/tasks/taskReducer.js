import { 
    TASKS_TODOLIST,
    AGREGAR_TASK,
    VALIDAR_TASK,
    ELIMINAR_TASK,
    TASK_ACTUAL,
    ACTUALIZAR_TASK,
    LIMPIAR_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case TASKS_TODOLIST:
            return {
                ...state,
                taskstodoList: action.payload
            }
        case AGREGAR_TASK:
            return {
                ...state,
                taskstodoList: [action.payload, ...state.taskstodoList],
                errortask: false
            }
        case VALIDAR_TASK:
            return {
                ...state,
                errortask: true
            }
        case ELIMINAR_TASK:
            return {
                ...state,
                taskstodoList: state.taskstodoList.filter(task => task._id !== action.payload )
            }
        case ACTUALIZAR_TASK:
            return {
                ...state,
                taskstodoList: state.taskstodoList.map(task => task._id === action.payload._id ? action.payload : task )
            }
        case TASK_ACTUAL:
            return {
                ...state,
                taskseleccionada: action.payload
            }
        case LIMPIAR_TASK:
            return {
                ...state,
                taskseleccionada: null
            }
        default:
            return state;
    }
}