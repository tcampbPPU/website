import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate() {
    if(!this.authService.loggedIn() ||  !this.authService.isAdmin()) {
      this.router.navigate(['/login']);
      return false;
    }else {
      return true;
    }
  }
}
