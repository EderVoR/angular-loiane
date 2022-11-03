import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
