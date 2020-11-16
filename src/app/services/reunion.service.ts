import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReunionDto } from '../common/reunion.dto';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  
  getReunion(reunion: ReunionDto): any {
    return this.http.post<any>(`http://localhost:8080/reuniones/create?temas=${reunion.temas}&descripcion=${reunion.descripcion}&fecha=${reunion.fecha}&hora_fin=${reunion.hora_fin}&hora_inicio=${reunion.hora_inicio}&asistentes=${reunion.asistentes}&convocante=${reunion.convocante}`, {});
  }

  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  getByAsistentes(name: string): Observable<ReunionDto[]> {
    return this.http.get<any>(`https://siget-grupo2.herokuapp.com/reuniones/get?asistentes=${name}`)
    .pipe(
      map((reunionesDto: ReunionDto[]) => {
        console.log(reunionesDto);
        return reunionesDto;
      })
    );
  }
}
