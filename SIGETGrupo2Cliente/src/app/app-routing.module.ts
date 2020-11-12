// app.routing.ts

import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { VerReunionesComponent } from './ver-reuniones/ver-reuniones/ver-reuniones.component';
import { RegistroComponent } from './registro/registro/registro.component';



const appRoutes = [
  { path: "", redirectTo: 'login', pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "reuniones", component: VerReunionesComponent, pathMatch: "full"},
  { path: "registro", component: RegistroComponent, pathMatch: "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
