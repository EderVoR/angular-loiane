import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosService } from './cursos/cursos.service';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
