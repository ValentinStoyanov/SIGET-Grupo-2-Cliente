import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../common/usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient) {
  }

//
  getLogin(usuario: UsuarioDto): any {
    return this.http.post<any>(`https://siget-grupo2.herokuapp.com/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }

  createUsuario(usuario: UsuarioDto): any {
    return this.http.post<any>(`https://siget-grupo2.herokuapp.com/usuarios/createUsuario?username=${usuario.username}&password=${usuario.password}&nombre=${usuario.nombre}&apellidos=${usuario.apellidos}&email=${usuario.email}&telefono=${usuario.telefono}
    `, {});
  }

  

}
