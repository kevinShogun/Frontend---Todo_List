import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import uuid from 'react-uuid';
import {TODO_TASK, AGREGAR_TASK, VALIDAR_TASK, ELIMINAR_TASK} from '../../types/index'

const TaskState = (props) => {
	const initialState = {
		taskItems: [
			{
				id: 0,
				TaskName: "Iniciar el E-commerce de la Farmacia",
				estado: true,
				ToDoListId: 1,
			},
			{
				id: 1, TaskName: "Terminar el Widget de contactos en Flutter",
				estado: false,
				ToDoListId: 2,
			},
			{
				id: 2, TaskName: "Normalizar la bd del restaurante que esta en azureSql",
				estado: false,
				ToDoListId: 3,
			},
			{
				id: 3, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 4,
			},
            {
				id: 4, TaskName: "Terminar el Widget de contactos en Flutter",
				estado: false,
				ToDoListId: 1,
			},
			{
				id: 5, TaskName: "Normalizar la bd del restaurante que esta en azureSql",
				estado: false,
				ToDoListId: 4,
			},
			{
				id: 6, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 3,
			},
            {
				id: 7, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 2,
			},
            {
				id: 8, TaskName: "Iniciar el E-commerce de la Farmacia",
				estado: true,
				ToDoListId: 3,
			},
			{
				id: 9, TaskName: "Terminar el Widget de contactos en Flutter",
				estado: false,
				ToDoListId: 1,
			},
			{
				id: 10, TaskName: "Normalizar la bd del restaurante que esta en azureSql",
				estado: false,
				ToDoListId: 1,
			},
			{
				id: 11, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 3,
			},
            {
				id: 12, TaskName: "Terminar el Widget de contactos en Flutter",
				estado: false,
				ToDoListId: 4,
			},
			{
				id: 13, TaskName: "Normalizar la bd del restaurante que esta en azureSql",
				estado: false,
				ToDoListId: 3,
			},
			{
				id: 14, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 2,
			},
            {
				id: 15, TaskName: "Optimizar la app de la tienda de ropa (Refactorizar)",
				estado: true,
				ToDoListId: 2,
			},
		],
        task_todo: null,
        error_task: false,
	};
	//crear dispatch y state
	const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Funciones

    //obtener las tareas por hacer, de un todo list
    const obtenerTask = (ToDoListId) =>{
        dispatch({
            type: TODO_TASK,
            payload: ToDoListId
        })
    }

    const agregarTask = (taskItems) =>{
		taskItems.id = uuid();
        dispatch({
            type: AGREGAR_TASK,
            payload: taskItems
        })
    }
    
    const validarTask = () =>{
        dispatch({
            type: VALIDAR_TASK,
        })
    }

    const elimianrTask = (ToDoListId) =>{
        dispatch({
            type: ELIMINAR_TASK,
            payload: ToDoListId
        })
        
    }

	return <TaskContext.Provider
            value={{
                taskItems: state.taskItems,
                task_todo: state.task_todo,
                error_task: state.error_task,
                obtenerTask,
                agregarTask,
                validarTask,
                elimianrTask,
            }}
    >{props.children}</TaskContext.Provider>;
};

export default TaskState;
