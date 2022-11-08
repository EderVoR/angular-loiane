import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTER: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTER);

