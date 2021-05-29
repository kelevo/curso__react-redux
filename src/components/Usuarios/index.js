// State full component --------------------
import React, { Component } from 'react';
// Importacion para conectar componente con reducer
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';

import * as usuariosActions from '../../actions/usuariosActions';

// Componente clase
class Usuarios extends Component {

    componentDidMount() {
        // this.props.traerTodos viene de usuariosActions que esta declarado
        // en la parte de abajo en el export y se encuentra en la carpeta actions
        this.props.traerTodos();
    }

    ponerContenido = () => {
        if (this.props.cargando) {
            return <Spinner />;
        }
        return (
            <table className="tabla">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Enlace</th>
                </tr>
                </thead>
                <tbody>
                { this.ponerFilas() }
                </tbody>
            </table>
        )
    }

    ponerFilas = () => (
        // Haremos que solo exista un tr y se vaya generando dinamicamente de acuerdo
        // a la cantidad de usuarios que existan
        // Traemos el estado e iteramos con map()
        this.props.usuarios.map((usuario) => (
        // Por cada usuario regresa un tr
        <tr key={ usuario.id }>
            <td>{ usuario.name }</td>
            <td>{ usuario.email }</td>
            <td>{ usuario.website }</td>
        </tr>
        ))
    );

    render() {
        console.log(this.props.cargando);
        console.log(this.props.error);
        return (
        <React.Fragment>
            { this.ponerContenido() }
        </React.Fragment>
        );
    }
}

// mapStateToProps recibe todos los reducers
const mapStateToProps = (reducers) => {
    // dentro seleccionamos solo los que deseamos enviar, en este caso solo usuarios
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);