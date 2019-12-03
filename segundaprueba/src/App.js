import React, { Component } from 'react';
import './App.css';
import Navega from './components/Navegacion';
import CursosForms from './components/CursosForms';
import FirstStep from './components/FirstStep'
import {cursos} from './cursos';
class App extends Component{
  //React es capaz de guardar datos en memoria volatil a traves del momento es creado
  //Se ejecuta el constructor y este se ejecuta antes que se ejecute renders
  constructor(){
    super()//Necesario para heredar las funciones del Componente React y si no se pone React da un error
    //Se establece un estado para el componente
    this.state={
      title:"Administracion de cursos",
      administrador:"Jaime Arriola",
      cursos
    }
    this.agregarCursos=this.agregarCursos.bind(this)

  }
  agregarCursos(curso){
    this.setState({
      cursos: [...this.state.cursos,curso]
    })
  }
  borrarCurso(index){
    //console.log(index);
    if(window.confirm('Esta seguro de que desea eliminar el curso?')){
      this.setState({
        cursos: this.state.cursos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  render(){
    const tarjetas=this.state.cursos.map((curso,i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h4>{curso.nombre}</h4>
              <span className="badge badge-pill badge-danger ml-2">
                {curso.duracion}
              </span>
            </div>
            <div className="card-body">
              {curso.codigo}
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.borrarCurso.bind(this,i)}>
                Borrar
              </button>
            </div>
          </div>
        </div>

      )
    })

    return (
      <div className="App">
          <Navega titulo="Home" contar={this.state.cursos.length}/>
          <span className="text-white"><h1>{this.state.title}</h1></span>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                <CursosForms onAgregarCursos={this.agregarCursos}/>
              </div>
              <div className="col-md-9">
                <FirstStep/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
