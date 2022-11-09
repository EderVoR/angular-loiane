import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
/*import { CursosComponent } from './cursos/cursos.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';*/

const appRouter: Routes = [
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouter);

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
