import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import "./styles/Dashboard.css"
import Navbar from './Navbar';

export default class Dashboard extends Component {
    render() {
      swal({
        title: "Good job!",
        icon: "success",
        text: "En esta App podras encontrar cualquier usuario de github, su perfil y repositorios, solo ingresando el nombre de usuario",
      });
        const cookies = new Cookies();
        return (
          <>
          <Navbar/>
          <div className="containerDashboard">
            <h3><strong>Nombre:</strong> {cookies.get('Nombre')}</h3>
            <h3><strong>Apellidos:</strong> {cookies.get('Apellidos')}</h3>
            <h3><strong>Cedula:</strong> {cookies.get('Cedula')}</h3>
            <h3><strong>Fecha de Nacimiento:</strong> {cookies.get('FechaNacimiento')}</h3>
            <h3><strong>Correo:</strong> {cookies.get('Correo')}</h3>
            <h3><strong>UsuarioGitHub:</strong> {cookies.get('UsuarioGit')}</h3>
          </div>
          </>
        );
      }
    }
