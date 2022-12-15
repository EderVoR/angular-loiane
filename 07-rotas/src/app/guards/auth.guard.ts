import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): boolean | Observable<boolean> {

		return this.verificarAcesso();
	}

	canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
		console.log("CanLoad, acesso sem permissao na sala.");
		return this.verificarAcesso();
	}

	private verificarAcesso(){
		if(this.authService.usuarioEstaAutenticado()){
			return true;
		}

		this.router.navigate(['/login']);

		return false;
	}
}
