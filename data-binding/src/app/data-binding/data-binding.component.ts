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

  nome: string = 'abc';

  pessoa = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

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

  onMudouValor(evento: any)
  {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
