// State full component --------------------
import React, { Component } from 'react';
import '../../index'
// Importamos axios para poder usar direcciones externas
import axios from 'axios';
// Importacion para conectar componente con reducer
import { connect } from 'react-redux';

class Usuarios extends Component {

    // COMO YA PUSIMOS EL ESTADO EN EL REDUCER, YA NO REQUERIMOS EL CONSTRUCTOR ------
    // Creamos un estado con un constructor (ESTADO INICIALIZATION)
    // constructor() {
    //     // Usamos super para que se vaya a Component de quien heredamos
    //     super();
    //     // Ponemos un estado
    //     this.state = {
    //     usuarios:[],
    //     }
    // }

    // componentDidMount
    // async componentDidMount() {
    //     // Traemos la API usando axios con el metodo get
    //     const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

    //     // Va a montar a los usuarios una vez inicialize la aplicacion
    //     // setState envia el estado a this.state en el constructor
    //     this.setState({
    //     usuarios: respuesta.data
    //     })
    // }

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
        return (
        <React.Fragment>
            <div>
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
            </div>
        </React.Fragment>
        );
    }
}

// mapStateToProps recibe todos los reducers
const mapStateToProps = (reducers) => {
    // dentro seleccionamos solo los que deseamos enviar, en este caso solo usuarios
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, { /*Actions*/ })(Usuarios);