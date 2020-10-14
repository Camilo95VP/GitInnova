import React, { Component } from 'react'
import '../components/styles/Form.css';
import Cookies from 'universal-cookie';
import "bootstrap/dist/css/bootstrap.min.css";



export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            nombre: '',
            apellidos: ''
          }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = e => {
        this.setState({
          form: { ...this.state.form, [e.target.name]: e.target.value }
        });
        console.log(this.state.form)
      };
    
      handleSubmit = e => {
        e.preventDefault();
        
          const cookies = new Cookies();
          cookies.set('Nombre', `${this.state.nombre}`, {path: '/'});
          cookies.set('Apellidos', `${this.state.apellidos}`, {path: '/'});
          cookies.set('rolUsuario', 'Administrador', {path: '/'});
          window.location.href='./dashboard';
    
      };
    
      render() {
        return (
          <div className="container">
            <div className="loginContainer">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="nombre"><h5>Nombre:</h5></label>
                <br />
                <input id="user" name="nombre" type="text" placeholder="Ingresa tu nombre aquí"  onChange={this.handleChange}/>
                <br />
                <br />
                <label htmlFor="apellidos"><h5>Apellidos:</h5></label>
                <br />
                <input id="pwd" name="apellidos" type="text" placeholder="Ingresa apellidos" onChange={this.handleChange}/>
                <br />
                <br />
                <label htmlFor="cedula"><h5>Cedula:</h5></label>
                <br />
                <input id="pwd" name="cedula" type="number" placeholder="Digite Cedula" onChange={this.handleChange}/>
                <br />
                <br />
                <label htmlFor="fecha"><h5>Fecha de Nacimiento:</h5></label>
                <br />
                <input id="pwd" name="fecha" type="text" placeholder="dia/mes/año" onChange={this.handleChange}/>
                <br />
                <br />
                <label htmlFor="correo"><h5>Correo electronico:</h5></label>
                <br />
                <input id="pwd" name="correo" type="text" placeholder="example@gmail.com" onChange={this.handleChange}/>
                <br />
                <br />
                <label htmlFor="usuariogit"><h5>Usuario GitHub:</h5></label>
                <br />
                <input id="pwd" name="usuariogit" type="text" placeholder="Nombre Usuario"onChange={this.handleChange}/>
                <br />
                <br />
                <input type="submit" className="btn btn-success btnLogin" value="Enviar"/>
              </form>
            </div>
          </div>
        );
      }
    }
