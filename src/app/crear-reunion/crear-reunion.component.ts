import { Component, OnInit } from '@angular/core';
import { ReunionDto } from 'src/app/common/reunion.dto';
import { Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';
import { UsuarioDto } from '../common/usuario.dto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-crear-reunion',
  templateUrl: './crear-reunion.component.html',
  styleUrls: ['./crear-reunion.component.css']
})
export class CrearReunionComponent implements OnInit {
  temas: string;
  descripcion: string;
  horaFin: string;
  horaInicio: string;
  asistentes: string[];
  convocante: string;
 
  constructor(public router: Router, private reunionServicio: ReunionService) { }
  respuesta: ReunionDto;
  nombreUsuario = localStorage.getItem("name");
 

  ngOnInit(): void{

  }

 reunion() {

    const reunion: ReunionDto = {
      temas: this.temas,
      descripcion: this.descripcion,
      horaFin: this.horaFin,
      horaInicio: this.horaInicio,
      asistentes: this.asistentes,
      convocante: this.nombreUsuario
    };

    this.reunionServicio
    .crear_reunion(reunion)
    .subscribe({
      next: (resp: ReunionDto) => {
        this.respuesta = resp;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (console.log("OK")),
    });


  }

}
