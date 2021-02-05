import {FORM_TODO} from '../../types';


export default (state, action) => {
    switch (action.type) {
        case FORM_TODO:
            return{
                ...state,
                formulario: true
            }

        default:
            return state
    }
}



