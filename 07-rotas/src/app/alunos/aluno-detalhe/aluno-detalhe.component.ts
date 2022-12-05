import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

	aluno: any;
	inscricao: Subscription;

  constructor(
	private route: ActivatedRoute,
	private alunosService: AlunosService
  ) {
	this.inscricao = Subscription.EMPTY
  }

  ngOnInit(): void {
	this.inscricao = this.route.params.subscribe(
		(params: any) =>{
			let id = params['id'];

			this.aluno = this.alunosService.getAluno(id);
		}
	);
  }

  ngOnDestroy(){
	this.inscricao.unsubscribe();
  }

}
