import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import TaskContext from "../../context/tasks/taskContext";

const Login = (props) => {
	// extraer los valores del context
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje, autenticado, iniciarSesion } = authContext;

	const tasksContext = useContext(TaskContext);
	const { limpiarTask } = tasksContext;

	// En caso de que el password o usuario no exista
	useEffect(() => {
		if (autenticado) {
			props.history.push("/todoLists");
		}

		if (mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria);
		}
		// eslint-disable-next-line
	}, [mensaje, autenticado, props.history]);

	// State para iniciar sesión
	const [usuario, guardarUsuario] = useState({
		email: "",
		password: "",
	});

	// extraer de usuario
	const { email, password } = usuario;

	const onChange = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	// Cuando el usuario quiere iniciar sesión
	const onSubmit = (e) => {
		e.preventDefault();

		// Validar que no haya campos vacios
		if (email.trim() === "" || password.trim() === "") {
			mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
		}

		limpiarTask();
		// Pasarlo al action
		iniciarSesion({ email, password });
	};

	return (
		<div className="overlay form-usuario sombra-dark">
			{alerta ? (
				<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
			) : null}

			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión{" "}<i className="fas fa-sign-in-alt"></i></h1>

				<form onSubmit={onSubmit}>
					<div className="campo-form">
						<label htmlFor="email">Email &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <box-icon name='envelope'></box-icon> </label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Tu Email"
							value={email}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="password">Password &nbsp; <box-icon name='lock'></box-icon></label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Tu Password"
							value={password}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Iniciar Sesión"
							
						/>
					</div>
				</form>

				<Link to={"/nueva-cuenta"} className="enlace-cuenta">
					Obtener Cuenta
				</Link>
			</div>
		</div>
	);
};

export default Login;
