import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

	getCurso(){
		return ['Angular', '.Net', 'C#'];
	}
}
