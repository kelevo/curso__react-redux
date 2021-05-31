import axios from 'axios';
import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes';
import * as usuariosTypes from '../types/usuariosTypes';

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = (key) => async(dispatch, getState) => {

    dispatch({
        type: CARGANDO
    });

    // con getState tenemos acceso al estado actual
    const { usuarios } = getState().usuariosReducer;
    // Sacamos publicaciones
    const { publicaciones } = getState().publicacionesReducer;
    // Obtenemos el id del usuario
    const usuario_id = usuarios[key].id

    try {
        const respuesta = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);

        const nuevas = respuesta.data.map((publicacion) => ({
            ...publicacion,
            comentarios: [],
            abierto: false
        }));

        const publicaciones_actualizadas = [
            ...publicaciones,
            nuevas
        ];

        dispatch({
            type: 'TRAER_POR_USUARIO',
            payload: publicaciones_actualizadas
        });

        const publicaciones_key = publicaciones_actualizadas.length - 1;
        // Actualizar usuarios
        const usuarios_actualizados = [ ...usuarios ];
        usuarios_actualizados[key] = {
            ...usuarios[key],
            publicaciones_key
        };

        dispatch({
            type: USUARIOS_TRAER_TODOS,
            payload: usuarios_actualizados
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Publicaciones no disponibles'
        })
    }
}

export const abrirCerrar = (pub_key, com_key) => (dispatch) => {
    console.log(pub_key, com_key);
}