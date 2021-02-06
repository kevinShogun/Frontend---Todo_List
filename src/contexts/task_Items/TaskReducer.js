
import {TODO_TASK, AGREGAR_TASK, VALIDAR_TASK, ELIMINAR_TASK} from '../../types/index'

export default (state, action)=>{
    switch (action.type) {
        case TODO_TASK:
            return{
                ...state,
                task_todo: state.taskItems.filter(task=> task.ToDoListId === action.payload)
            }
        case AGREGAR_TASK:
            return{
                ...state,
                taskItems: [...state.taskItems, action.payload],
                error_task: false
            }
        case VALIDAR_TASK:
            return{
                ...state,
                error_task: true
            }
            case ELIMINAR_TASK:
                return {
                    ...state,
                    taskItems: state.taskItems.filter(task=> task.id !== action.payload)
                }
        default:
            return state;
            break;
    }
}

