import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JugadoresService } from '../servicios/jugadores.service';


@Injectable({
  providedIn: 'root'
})
export class LogueoGuard implements CanActivate {
  constructor(private router:Router,private miServicio:JugadoresService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.miServicio.logueado()){
      return true;
    }else{
      this.router.navigate(['/Login']);
      return false;
    }
  }
  
}
