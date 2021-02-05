import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NewAccount = () =>{
    const [usuario, guardaUsuario] = useState({
        name: '',
        email: '',
        password: '',
        confirm:''
    });

    const {name, email, password, confirm}= usuario;

    const onChange = e =>{
        guardaUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Sing Up</h1>

                <form Submit={onSubmit}>
                <div className='campo-form'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            placeholder='example Name'
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Your Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirm'>Confirm Password</label>
                        <input 
                            type='password'
                            id='confirm'
                            name='confirm'
                            placeholder='Confirm Your Password'
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Sign Up'
                        />
                    </div>
                </form>
                <Link to={'./'} className='enlace-cuenta'>
                    Sign In
                </Link>
            </div>
        </div>
    );
}


export default NewAccount;