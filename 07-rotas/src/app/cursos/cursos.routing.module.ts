import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRouter: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(cursosRouter);

@NgModule({
  imports: [RouterModule.forChild(cursosRouter)],
  exports: [RouterModule]
})

export class CursosRoutingModule{

}
