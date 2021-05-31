import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

// Una funcion que retorna otra funcion () => () => {}
export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Hacemos un dispatch del tipo traer_usuarios y le entregamos
        // al reducer los datos con respuesta.data
        dispatch({
            type: TRAER_TODOS,
            // respuesta.data es con lo que va a sobrescribir en usuariosReducer.js
            // lo colocara en lugar de action.payload
            payload: respuesta.data
        })
    } catch (error) {
        console.log('Error: ', error.message);
        dispatch({
            type: ERROR,
            payload: 'Algo salio mal, informacion de usuario no disponible...'
        })
    }
}