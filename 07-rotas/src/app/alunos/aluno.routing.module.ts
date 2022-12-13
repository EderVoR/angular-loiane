import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes = [
	{path: '', component: AlunosComponent, children: [
		{path: 'novo', component: AlunoFormComponent},
		{path: ':id', component: AlunoDetalheComponent},
		{path: ':id/editar', component: AlunoFormComponent,
			canDeactivate: [AlunosDeactivateGuard]
		}
	]},
];

@NgModule({
	imports: [RouterModule.forChild(alunosRoutes)],
	exports: [RouterModule]
})
export class AlunosRoutingModule{

}
