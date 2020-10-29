import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioDto } from '../common/usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  get(reunion: ReunionDto): any {
    return this.http.post<any>(`http://localhost:8080/reuniones/create?temas=${reunion.temas}&descripcion=${reunion.descripcion}&hora_fin=${reunion.hora_fin}&hora_inicio=${reunion.hora_inicio}&asistentes=${reunion.asistentes}&convocante=${reunion.convocante}`, {});
  }
}