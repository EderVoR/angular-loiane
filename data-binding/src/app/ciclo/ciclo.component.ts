import { Component, 
         OnChanges, 
         OnInit, 
         DoCheck, 
         AfterContentInit, 
         AfterContentChecked,
         AfterViewInit, 
         AfterViewChecked, 
         OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
//Por boa pratica é bom colocar os hooks da descricao de quando implementados no componente
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
                            AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('construtor');
  }

  //quando o componente é atualizado
  ngOnInit(){
    this.log('ngOnInit');
  }

  //Inicializado quando valor property-binding é atualizado
  ngOnChanges(){
    this.log('ngOnChanges');
  }
  //a cada ciclo de verificação de mudanças
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  //depois de inserir conteudo externo na view
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  //cada verificação de conteudo inserido
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  //cada verificação de conteudo/conteudo filho
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
  //antes da diretiva componente ser destruido
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  log(valor: string){
    console.log(valor);
  }

}
