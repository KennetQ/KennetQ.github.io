import React, { Component } from 'react';

class Formulario extends Component {
  constructor () {
    super();
    this.state = {
      carne: '',
      horario: '',
      llegotarde: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
        carne: '',
        horario: '',
        llegotarde: '',
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
       
        <form onSubmit={this.handleSubmit} className="card-body">
        <p>Ingrese su Carnet</p>
          <div className="form-group">
            <input
              type="text"
              name="carne"
              className="form-control"
              value={this.state.carne}
              onChange={this.handleInputChange}
              placeholder=""
              />
          </div>
          
          
          <div className="form-group">
            <p>Ingrese su horario de Laboratorio</p>
            <select
                name="horario"
                className="form-control"
                value={this.state.horario}
                onChange={this.handleInputChange}
              >
                    <option>Lunes de 9:00 a 11.00</option>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Miércoles de 9:00 a 11.00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
            </select>
          </div>
          <div className="form-group">
          <p>¿Llego Tarde?</p>
            <input
              type="text"
              name="llegotarde"
              className="form-control"
              value={this.state.llegotarde}
              onChange={this.handleInputChange}
              placeholder="Si/No"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    )
  }

}

export default Formulario;
