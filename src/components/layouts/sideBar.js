import React from 'react'
import NewToDo from '../projects/newToDoList';
import ToDoLists from '../projects/ToDoLists';


const sidebar = () => {
    return ( 
        <aside className='sombra'>
            <h1>ToDo<span> List</span></h1>
                <NewToDo/>
            <div className="proyectos ">
                <h2>Your  To Do  Lists</h2>
                <ToDoLists/>
            </div>
        </aside>
     );
}
 
export default sidebar;