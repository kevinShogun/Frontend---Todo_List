import React from "react";

const Task = ({task}) => {
	return (
		<li className="tarea sombra">
			<p>{task.TaskName}</p>

			<div className="estado">
				{task.estado ? (
					<button type="button" className="completo">
						Completed
					</button>
				) : (
					<button type="button" className="incompleto">
						Uncompleted
					</button>
				)}
			</div>

            <div className="acciones">
                    <button type='button' className="btn btn-primario">Edit</button>
                    <button type='button' className="btn btn-secundario">Delete</button>
            </div>
		</li>
	);
};

export default Task;
