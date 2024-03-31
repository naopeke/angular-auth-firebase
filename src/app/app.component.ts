import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  template: `
  <mat-toolbar color='primary'>Angular Firebase Authentication
    <span *ngIf="currentUser()">
      {{ currentUser()?.email }}
    </span>
  </mat-toolbar>


  <div class="container">
    <router-outlet></router-outlet>
  </div>
    `,
  styles: [`
    .container {
      padding: 24px;
    }

    mat-toolbar {
      justify-content: space-between;
    }
  `],
})
export class AppComponent {

  authService = inject(AuthService);

  currentUser = this.authService.currentUser;
}
