import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

	private cursos: string[] = ['Angular', '.Net', 'C#'];

	constructor(){
		console.log("Entrou aqui no service");
	}

	getCurso(){
		return this.cursos;
	}

	addCurso(curso: string){
		this.cursos.push(curso);
	}
}
