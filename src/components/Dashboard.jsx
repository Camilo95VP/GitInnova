import React, { Component } from 'react'
import Cookies from 'universal-cookie';

export default class Dashboard extends Component {
    render() {
        const cookies = new Cookies();
        return (
          <div className="containerDashboard">
            <h3>Nombre: {cookies.get('Nombre')}</h3>
            <h3>Apellidos: {cookies.get('Apellidos')}</h3>
            <h3>Rol Usuario: {cookies.get('rolUsuario')}</h3>
          </div>
        );
      }
    }
