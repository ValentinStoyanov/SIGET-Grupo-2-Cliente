import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../common/usuario.dto';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient, private cookies: CookieService) {
  }

  getLogin(usuario: UsuarioDto): any {
    return this.http.post<any>(`https://siget-grupo2.herokuapp.com/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
