import { Component, OnInit } from '@angular/core';
import { ReunionDto } from 'src/app/common/reunion.dto';
import { Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';
import { UsuarioDto } from '../common/usuario.dto';
import { UsuarioService } from '../services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-reunion',
  templateUrl: './modificar-reunion.component.html',
  styleUrls: ['./modificar-reunion.component.css']
})
export class ModificarReunionComponent implements OnInit {

  constructor(public router: Router, private reunionServicio: ReunionService, private usuarioServicio: UsuarioService) { }
  temas: string;
  descripcion: string;
  horaFin: string;
  horaInicio: string;
  asistentes: string[] = [];
  convocante: string;
  respuesta: ReunionDto;
  nombreUsuario = localStorage.getItem("name");
  usuariosRegistrados: UsuarioDto[];
  usuariosElegidos: UsuarioDto[] = [];
  indexAdd: number = null;
  indexDelete: number = null;

  reuniones :ReunionDto[];
  loading = false;
  editForm: FormGroup;

  ngOnInit(): void{
        this.usuarioServicio.getAll().subscribe({
      next: (usuariosReceived: UsuarioDto[]) =>{
        (this.usuariosRegistrados = usuariosReceived);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (console.log("OK")),
    });

    this.updateTable();
  }


  reunion(): void {
    console.log(this.asistentes);

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
      complete: () => (this.updateAddress()),
    });
  }

  updateAddress(): void {
    this.router.navigate(['reuniones']);
  }

  deleteAsistente(): void{
    if (this.indexDelete != null){
      this.usuariosRegistrados.push(this.usuariosElegidos[this.indexDelete]);
      this.asistentes.splice(this.indexDelete, 1);
      this.usuariosElegidos.splice(this.indexDelete, 1);
    }
  }

  addAsistente(): void{
    if (this.indexAdd != null){
      this.usuariosElegidos.push(this.usuariosRegistrados[this.indexAdd]);
      this.asistentes.push(this.usuariosRegistrados[this.indexAdd].username);
      this.usuariosRegistrados.splice(this.indexAdd, 1);

    }
  }
  actualizarIndexAdd(index: number): void {
    this.indexAdd = index;
  }

  actualizarIndexDelete(index: number): void {
    this.indexDelete = index;
  }
  updateReunion(): void {
    const reunionDto: ReunionDto = {
      temas: this.temas,
      descripcion: this.descripcion,
      horaFin: this.horaFin,
      horaInicio: this.horaInicio,
      asistentes: this.asistentes,
      convocante: this.nombreUsuario
    };

    this.reunionServicio.updateReunion(reunionDto)
  }

  updateTable(): void{
    this.reunionServicio
     .getAll()
     .subscribe({
      next: (reunionesReceived: ReunionDto[]) => {
        this.reuniones = reunionesReceived;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (this.loading = false),
    });
  }

  setValues(reunion: ReunionDto): void {
    this.temas = reunion.temas;
    this.descripcion = reunion.descripcion;
    this.horaInicio = this.parseDateToStringWithFormat(new Date(reunion.horaInicio));
    this.horaFin = this.parseDateToStringWithFormat(new Date(reunion.horaFin));
  }
  private parseDateToStringWithFormat(date: Date): string {
    let result: string;
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let hh = date.getHours().toString();
    let min = date.getMinutes().toString();
    dd = dd.length === 2 ? dd : "0" + dd;
    mm = mm.length === 2 ? mm : "0" + mm;
    hh = hh.length === 2 ? hh : "0" + hh;
    min = min.length === 2 ? min : "0" + min;
    result = [date.getFullYear(), '-', mm, '-', dd, 'T', hh, ':', min].join('');

    return result;
  }
}
