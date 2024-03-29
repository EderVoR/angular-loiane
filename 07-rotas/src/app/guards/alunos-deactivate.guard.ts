
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
	canDeactivate(
		component: IFormCanDeactivate,
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {

		//console.log('Guarda de desativação');
		//return component.podeMudarRota();
		return component.podeDesativar();
	}
}
