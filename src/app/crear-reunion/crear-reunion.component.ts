import { Component } from '@angular/core';
import { ReunionDto } from 'src/app/common/reunion.dto';
import { Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-crear-reunion',
  templateUrl: './crear-reunion.component.html',
  styleUrls: ['./crear-reunion.component.css']
})
export class CrearReunionComponent {
  constructor(public router: Router, private reunionServicio: ReunionService) { }
  temas: string;
  descripcion: string;
  fecha: string;
  hora_fin: string;
  hora_inicio: string;
  asistentes: string[];
  convocante: string;


 crear_reunion() {
    const reunion: ReunionDto = {
      temas: this.temas,
      descripcion: this.descripcion,
      fecha: this.fecha,
      hora_fin: this.hora_fin,
      hora_inicio: this.hora_inicio,
      asistentes: this.asistentes,
      convocante: this.convocante
    }
    this.reunionServicio.getReunion(reunion)
  }

}
