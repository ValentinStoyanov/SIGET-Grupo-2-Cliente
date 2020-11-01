import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDto } from '../common/usuario.dto';
import { UpsertUsuarioDto } from '../common/upsertUsuario.dto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-gestionUsuario',
  templateUrl: './gestionUsuario.component.html',
  styleUrls: ['./gestionUsuario.component.css']
})
export class VerUsuariosComponent implements OnInit {

  constructor(public router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {}

  usuarios: UsuarioDto[];
  error: string;
  loading = false;
  editForm: FormGroup;

  ngOnInit(): void {
    this.loading = true;

    this.editForm = this.formBuilder.group({
      username: ["", []],
      password: ["", []],
    });

    this.updateTable();
  }

  updateUsuario(): void {
    const upsertUsuarioDto: UpsertUsuarioDto = {
      username: this.editForm.controls.username.value,
      password: this.editForm.controls.password.value,
    };

    this.usuarioService.updateUsuario(upsertUsuarioDto).subscribe({
      error: (err) => console.error(err),
      complete: () => (this.updateTable()),
    });
  }


  deleteTarea(id: string): void {
    this.usuarioService.deleteTarea(id).subscribe({
      error: (err) => console.error(err),
      complete: () => (this.updateTable()),
    });
  }

  updateTable(): void{
    this.usuarioService
     .getAll()
     .subscribe({
      next: (usuariosReceived: UsuarioDto[]) => {
        this.usuarios = usuariosReceived;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (this.loading = false),
    });
  }
}
