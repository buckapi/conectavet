import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient,withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi(), // Para usar interceptores si tienes alguno configurado
    withFetch() // Habilita el uso de fetch API
  ), provideAnimationsAsync(),
  ],
}).catch(err => console.error(err));