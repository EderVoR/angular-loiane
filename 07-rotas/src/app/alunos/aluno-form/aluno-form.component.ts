import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';

@Component({
	selector: 'app-aluno-form',
	templateUrl: './aluno-form.component.html',
	styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

	aluno: any;
	inscricao: Subscription = Subscription.EMPTY;
	private formMudou: boolean = false;

	constructor(
		private alunosServive: AlunosService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.inscricao = this.route.params.subscribe(
			(params: any) =>{
				let id = params['id'];

				this.aluno = this.alunosServive.getAluno(id);

				if(this.aluno ==  null){
					this.aluno = {};
				}
			}
		);
	}

	ngOnDestroy(){
		this.inscricao.unsubscribe();
	}

	onInput(){
		this.formMudou = true;
		console.log('mudou');
	}

	podeMudarRota(){
		if(this.formMudou)
		{
			confirm('Tem certeza que deseja sair desta pagina?');
		}
		return true;
	}

	podeDesativar() {
		return this.podeMudarRota();
	}
}
