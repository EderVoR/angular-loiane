import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  constructor() { }

  mostrarCurso: boolean = false;

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
