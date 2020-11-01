import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioDto } from '../common/usuario.dto';
import { UpsertUsuarioDto } from '../common/upsertUsuario.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  getLogin(usuario: UsuarioDto): any {
    return this.http.post<any>(`http://localhost:8080/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }


  updateUsuario(upsertUsuario: UpsertUsuarioDto): any{
    return this.http.put<any>(`http://localhost:8080/usuarios/update?username=${upsertUsuario.username}&password=${upsertUsuario.password}`, {});
  }

  deleteTarea(username: string): any{
    return this.http.post<any>(`http://localhost:8080/usuarios/delete?username=${username}`, {});
  }


  getAll(): Observable<UsuarioDto[]> {
    return this.http.get<any>(`http://localhost:8080/usuarios/getAll`)
    .pipe(
      map((usuariosDto: UsuarioDto[]) => {
        return usuariosDto;
      })
    );
  }
}