import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

	livro: any = {
		titulo: 'logica de programação',
		rating: 4.54321,
		numeroPaginas: 347,
		preco: 44.99,
		dataLancamento: new Date(2016, 5, 23),
		url: 'www.google.com.br'
	};

	livros: string[] = ['Angular', 'Java']

	filtro: any;

	addCurso(valor: string){
		this.livros.push(valor);
	}

	obterCursos(){
		if(this.livros.length === 0 || this.filtro === undefined || this.filtro?.trim() === ''){
			return this.livros;
		}

		return this.livros.filter(
		(v: any) => {
			if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
				return true;

			return false;
		}
	);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
