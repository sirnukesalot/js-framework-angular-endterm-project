import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideFirebaseApp,initializeApp} from "@angular/fire/app"
import { getAuth, provideAuth} from "@angular/fire/auth"
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { from } from 'rxjs';
import { provideStore } from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools'
import { provideEffects } from '@ngrx/effects';
// import { gamesReducer } from '../state/games.reducer';
// import { GamesEffects} from './state/games.effects';
import { provideServiceWorker } from '@angular/service-worker'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()),provideStoreDevtools(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })]
};

// add to ngrx store provideStore({games: gamesReducer,}),provideEffects([GamesEffects]), 
