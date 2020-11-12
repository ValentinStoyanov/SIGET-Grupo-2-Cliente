// app.routing.ts

import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from './menu/menu.component';
import { VerReunionesComponent } from './ver-reuniones/ver-reuniones/ver-reuniones.component';


const appRoutes = [
  { path: "", redirectTo: 'login', pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "reuniones", component: VerReunionesComponent, pathMatch: "full"},
  { path: "menu", component: MenuComponent, pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
