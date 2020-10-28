import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioDto } from '../common/usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  getLogin(usuario: UsuarioDto): Observable<UsuarioDto[]> {
    return this.http.post<any>(`http://localhost:8080/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }
}