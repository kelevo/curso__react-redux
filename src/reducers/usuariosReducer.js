import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			// Retornamos un nuevo objeto en donde nos de todo lo que tenia
			// en el estado (...state) y sobre escriba usuarios con lo que nos manda
			// usuariosActions... ya que el estado cambia, se regresa al componente
			// se modifica el estado y listo, vuelve a ejecutar el render
			return {
				...state,
				usuarios: action.payload,
				cargando: false
			};
		case CARGANDO:
			return { ...state, cargando: true };
		case ERROR:
			return { ...state, error: action.payload, cargando: false };

		default: return state;
	};
};