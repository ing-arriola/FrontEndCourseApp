import React, { Component } from 'react';

class CursosForms extends Component {
  constructor() {
      super()
      this.state = {
        nombre:'',
        codigo:'',
        instructor:'',
        duracion:''
      }
      this.handleInput=this.handleInput.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)

  }

  handleInput(e){
    //console.log(e.target.value, e.target.name);
    const {value,name}=e.target
    this.setState({
      [name]:value
    })
    console.log(this.state);
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.onAgregarCursos(this.state)
  }

  render(){
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Nombre del curso"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="codigo"
              className="form-control"
              placeholder="Codigo del curso"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="instructor"
              className="form-control"
              placeholder="Instructor"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="duracion"
              className="form-control"
              placeholder="Duracion del curso"
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
      </div>
    )
  }
}

export default CursosForms
