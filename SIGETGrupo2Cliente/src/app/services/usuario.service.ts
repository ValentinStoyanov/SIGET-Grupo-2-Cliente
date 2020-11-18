import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../common/usuario.dto';
import { RegistroDto } from '../common/registro.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient) {
  }

  getLogin(usuario: UsuarioDto): any {
    return this.http.post<any>(`http://localhost:8080/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }

  getRegistro(usuario: RegistroDto): any {
    return this.http.post<any>(`http://localhost:8080/usuarios/createUsuario?username=${usuario.username}&password=${usuario.password}&nombre=${usuario.nombre}&apellidos=${usuario.apellidos}&email=${usuario.email}&telefono=${usuario.telefono}`, {});
  }
}