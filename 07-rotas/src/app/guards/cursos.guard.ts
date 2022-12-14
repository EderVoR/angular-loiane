import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class CursosGuard implements CanActivateChild{

	canActivateChild(
			route: ActivatedRouteSnapshot,
			state: RouterStateSnapshot
		): boolean | Observable<boolean> {

			//console.log('guarda de rota filha');
			return true;
	}
}
