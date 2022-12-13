
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';


@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
	canDeactivate(
		component: AlunoFormComponent,
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {

		console.log('Guarda de desativação');

		return component.podeMudarRota();
	}
}
