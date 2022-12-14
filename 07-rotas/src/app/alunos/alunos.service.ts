import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

	private alunos: Aluno[] = [
		{id: 1, nome: 'Aluno01', email: 'aluno1@email.com'},
		{id: 2, nome: 'Aluno02', email: 'aluno2@email.com'},
		{id: 3, nome: 'Aluno03', email: 'aluno3@email.com'}
	];

	getAlunos(){
		return this.alunos;
	}

	getAluno(id: number){
		for(let i = 0; i < this.alunos.length; i++){
			let aluno = this.alunos[i];
			if(aluno.id == id){
				return aluno;
			}
		}
		return null;
	}

  constructor() { }
}
