import React,{Fragment, useState} from 'react'

const NewToDoList = () => {

    const [list, guardarList] = useState({
        NameTODO: '',
    });

    const {NameTODO} = list;

    // lee los contenidos del input
    const onChangeList = e =>{
        guardarList({
            ...list,
            [e.target.name] : e.target.value

        })
    };

    const onSubmitToDO = (e) =>{
        e.preventDefault();
    }
    return ( 
        <>
        <Fragment>
            <button 
        type='button'
        className="btn btn-primario btn-block">New ToDo List
        </button>

        <form className='formulario-nuevo-proyecto'>

            <input
                type='text'
                className='input-text'
                placeholder='Name of ToDo List'
                name='NameTODO'
                value={NameTODO}
                onChange={onChangeList}

            />
            <input
                type='submit'
                className='btn btn-primario btn-block'
                value='Add ToDo List'
                onSubmit={onSubmitToDO}
            />
        </form>
        </Fragment>
        
        </>
     );
}
 
export default NewToDoList;