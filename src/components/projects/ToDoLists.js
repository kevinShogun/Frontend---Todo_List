import React from 'react';
import Item from './List_item';

const ToDoLists = () => {

    const ListItems = [
        {name: 'Tareas Hogareñas'},
        {name: 'Deberes Escoalres'},
        {name: 'Obligaciones Laborales'}
    ]

    return ( 
        <ul className="listado-proyectos">
            {ListItems.map(item=>(
                <Item
                      Items={item}  
                />
            ))}
        </ul>
     );
}
 
export default ToDoLists;