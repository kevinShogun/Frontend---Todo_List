import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
	const [usuario, guardaUsuario] = useState({
		email: "",
		password: ""
	});

	const { email, password } = usuario;

	const onChange = (e) => {
		guardaUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

    const onSubmit = (e) =>{
        e.preventDefault();
    }

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Sing In</h1>

				<form onSubmit={onSubmit}>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
                            name='email'
							placeholder="example@example.com"
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
                            name='password'
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Sign In"
						/>
					</div>
				</form>
				<Link to={"./new-account"} className="enlace-cuenta">
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default Login;
