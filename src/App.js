import React, { Component } from 'react';

import './App.css';

// data
import { Ingresos } from './Ingresos.json';

// subcomponents
import Formulario from './Components/Formulario';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Ingresos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      Ingresos: this.state.Ingresos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(Ingresos) {
    this.setState({
      Ingresos: [...this.state.Ingresos, Ingresos]
    })
  }

  render() {
    const Ingresos = this.state.Ingresos.map((Ingresos, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{Ingresos.carne}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                
                {Ingresos.horario}
              </span>
            </div>
            <div className="card-body">
             <p>¿Llegó Tarde?</p>  
              {Ingresos.llegotarde}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
             Estudiantes Registrados
            <span className="badge badge-pill badge-light ml-2">
              {this.state.Ingresos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
               
              <Formulario onAddTodo={this.handleAddTodo}></Formulario> 
            </div>

            <div className="col-md-8">
              <div className="row">
                {Ingresos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;