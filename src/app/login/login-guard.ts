import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LoginServiceService } from "./login/login-service.service";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: LoginServiceService) {}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
            if (this.authService.isAuthenticated()) {
                return true;
            }

            this.router.navigate(['/sigin']);
            return false;
        }
    
}