import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioDto } from '../common/usuario.dto';
import { ReunionDto } from '../common/reunion.dto';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  getAll(): Observable<ReunionDto[]> {
    return this.http.get<any>(`http://localhost:8080/reuniones/getAll`)
    .pipe(
      map((tareasDto: ReunionDto[]) => {
        return tareasDto;
      })
    );
  }
}