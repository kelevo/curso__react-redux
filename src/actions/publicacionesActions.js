import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes';
import axios from 'axios';

export const traerPorUsuario = (key) => async(dispatch, getState) => {
    // con getState tenemos acceso al estado actual
    const { usuarios } = getState().usuariosReducer;
    // Sacamos publicaciones
    const { publicaciones } = getState().publicacionesReducer;
    // Obtenemos el id del usuario
    const usuario_id = usuarios[key].id

    const respuesta = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);

    const publicaciones_actualizadas = [
        ...publicaciones,
        respuesta.data
    ];

    dispatch({
        type: 'TRAER_POR_USUARIO',
        payload: publicaciones_actualizadas
    })
}