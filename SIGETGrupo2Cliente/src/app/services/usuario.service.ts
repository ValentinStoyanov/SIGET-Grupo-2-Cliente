import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../common/usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient) {
  }

  getLogin(usuario: UsuarioDto): any {
    return this.http.post<any>(`http://localhost:8080/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }
}