import React from 'react';
import Sidebar from '../layouts/sideBar';
import HeaderApp from '../layouts/Header';
import FormTask from '../task/FormTask';
import ListTask from '../task/ListTask';

const Projects = () => {
    return ( 
        <div className='contenedor-app'>
            <Sidebar/>
            <div className="seccion-principal">
            <HeaderApp/>
                <main>
                <FormTask/>
                    <div className="contenedor-tareas">
                            <ListTask/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;