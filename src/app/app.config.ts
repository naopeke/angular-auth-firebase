import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { MatSnackBarModule} from '@angular/material/snack-bar'

const firebaseConfig = {

  apiKey: "AIzaSyC_ccpXpCGjV7ylDJ6pHnTWgMX0rQFuLGo",

  authDomain: "authentification-for-angular.firebaseapp.com",

  projectId: "authentification-for-angular",

  storageBucket: "authentification-for-angular.appspot.com",

  messagingSenderId: "384498405290",

  appId: "1:384498405290:web:3634ec5c094e5c3c80e5d3",

  measurementId: "G-BS50VR7RE2"

};


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideAnimations(), 
              importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"authentification-for-angular","appId":"1:384498405290:web:3634ec5c094e5c3c80e5d3","storageBucket":"authentification-for-angular.appspot.com","apiKey":"AIzaSyC_ccpXpCGjV7ylDJ6pHnTWgMX0rQFuLGo","authDomain":"authentification-for-angular.firebaseapp.com","messagingSenderId":"384498405290","measurementId":"G-BS50VR7RE2"}))), 
              importProvidersFrom(provideAuth(() => getAuth())),
              MatSnackBarModule
             ]};
