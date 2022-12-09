import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class AlunosGuard implements CanActivateChild{

	canActivateChild(
			route: ActivatedRouteSnapshot,
			state: RouterStateSnapshot
		): boolean | Observable<boolean> {

			console.log(route);
			console.log(state);
			return true;
	}
}
