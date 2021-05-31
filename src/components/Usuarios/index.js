// State full component --------------------
import React, { Component } from 'react';
// Importacion para conectar componente con reducer
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';


import * as usuariosActions from '../../actions/usuariosActions';
// Componente clase
class Usuarios extends Component {

    componentDidMount() {
        // this.props.traerTodos viene de usuariosActions que esta declarado
        // en la parte de abajo en el export y se encuentra en la carpeta actions
        if (!this.props.usuarios.length) {
            this.props.traerTodos();
        }
    }

    ponerContenido = () => {
        if (this.props.cargando) {
            return <Spinner />;
        }

        if (this.props.error) {
            return <Fatal mensaje={ this.props.error } />;
        }

        return <Tabla />;
    };

    render() {
        return (
            <React.Fragment>
                <h1>Usuarios</h1>
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