import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroDto } from 'src/app/common/registro.dto';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    RolId: string;
    nombre: string;
    apellidos: string;
    telefono: number;
    username: string;
    email: string;
    password: string;

  constructor(public router: Router, private usuarioServicio: UsuarioService) { 
  }
  respuesta: RegistroDto;

metodoRegistrar(){
  const registro: RegistroDto = {
    RolId: this.RolId,
    nombre: this.nombre,
    apellidos: this.apellidos,
    telefono: this.telefono,
    username: this.username,
    email: this.email,
    password: this.password
  }

  this.usuarioServicio
  .getRegistro(registro)
  .subscribe({
      next: (resp: RegistroDto)=>{
        this.respuesta = resp;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (console.log("OK")),
  });
}
}
