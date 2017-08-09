import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthorizeGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}