import React, { Component } from 'react';
class Navegacion extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
        {this.props.titulo}
        <span className="badge badge-pill badge-light ml-2">
          {this.props.contar}
        </span>
        </a>
        <button className="btn btn-primary">
          Siguiente
        </button>
      </nav>
    )
  }
}

export default Navegacion
