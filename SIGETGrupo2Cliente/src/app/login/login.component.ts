// login.component.ts

import { Component } from "@angular/core";
import { UsuarioDto } from '../common/usuario.dto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private servicioUsuario: UsuarioService) {}

  

  login() {
    console.log(this.email);
    console.log(this.password);
    
    const usuario: UsuarioDto = {
      username: this.email,
      password: this.password
    }
    
    this.servicioUsuario.getLogin(usuario)
  }
}