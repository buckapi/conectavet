import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private _activateRoute = 'home';
  showIcons = false;
  specialists: any[] = [];
  showOverlay = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get activateRoute(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('activateRoute') || this._activateRoute;
    }
    return this._activateRoute;
  }
  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
    this.showIcons = this.showOverlay; // Mostrar las opciones solo si el overlay está activo
  }
  setRoute(route: string) {
    if (isPlatformBrowser(this.platformId)) {
      const isLoggedin = localStorage.getItem('isLoggedin') === 'true';
  
      if (route === 'profile') {
        route = isLoggedin ? 'profile' : 'login';
      }
  
      this._activateRoute = route;
      localStorage.setItem('activateRoute', route);
    } else {
      this._activateRoute = route;
    }
  }
  
}
