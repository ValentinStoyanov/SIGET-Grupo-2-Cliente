import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioDto } from 'src/app/common/usuario.dto';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
    username: string;
    password: string;
    nombre: string;
    apellidos: string;
    email : string;
    telefono: number;

  constructor(private servicioUsuario: UsuarioService) { }
  //public frmSignup: FormGroup;

  ngOnInit(): void {

    
  }

  metodoRegistrar(){
 
  const usuario: UsuarioDto = {
    username: this.username,
    password: this.password, 
    nombre: this.nombre, 
    apellidos: this.apellidos, 
    email : this.email, 
    telefono: this.telefono,
  }
  this.strongPassword()
  this.servicioUsuario.createUsuario(usuario)
}


strongPassword = function() {
  return {
      validate: function(password) {
          const value = password;
          if (value === '') {
              return {
                  valid: true,
              };
          }

          if (value.length < 8) {
              return {
                  valid: false,
                  message: 'La contraseña debe tener 8 caracteres como minimo',
              };
          }
          
          if (value === value.toLowerCase()) {
              return {
                  valid: false,
                  message: 'La contraseña debe tener por lo menos una mayuscula',
              };
          }

          if (value === value.toUpperCase()) {
              return {
                  valid: false,
                  message: 'La contraseña debe tener por lo menos una minuscula',
              };
          }

          if (value.search(/[0-9]/) < 0) {
              return {
                  valid: false,
                  message: 'La contraseña debe contener al menos un numero',
              };
          }

          return {
              valid: true,
          };
      },
  };
};
}