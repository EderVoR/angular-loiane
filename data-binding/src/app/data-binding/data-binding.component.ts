import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
      background-color: yellow;
      font-weight: bold;
    }
  `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com  ';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  salvarValor(valor: any){
    var elemento = valor as HTMLInputElement;
    this.valorSalvo = elemento.value;
  }

  onMouseOverOur(){
     this.isMouseOver = !this.isMouseOver;
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Me feche');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
