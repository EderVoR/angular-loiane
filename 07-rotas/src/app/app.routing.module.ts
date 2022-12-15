import { CursosGuard } from './guards/cursos.guard';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
/*import { CursosComponent } from './cursos/cursos.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';*/

const appRouter: Routes = [
	{ path: 'cursos',
		loadChildren: () => import('./cursos/cursos.module').then(c => c.CursosModule),
		canActivate: [AuthGuard],
		canActivateChild: [CursosGuard],
		canLoad: [AuthGuard]
	},
	{ path: 'alunos',
		loadChildren: () => import('./alunos/alunos.module').then(a => a.AlunosModule),
		canActivate: [AuthGuard],
		//canActivateChild: [AlunosGuard],
		canLoad: [AuthGuard]
	},
	//{path: 'cursos', component: CursosComponent},
	//{path: 'curso/:id', component: CursoDetalheComponent},
	//{path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '',
		component: HomeComponent,
		canActivate: [AuthGuard]
	}
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouter);

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
