import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/auth.service';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
  template: `
  <mat-toolbar color='primary'>Angular Firebase Authentication
    
    <button mat-button *ngIf="currentUser()" [mat-menu-trigger-for]="userMenu">
      {{ currentUser()?.email }}
      <mat-icon>expand_more</mat-icon>
    </button>
<!-- 
    <button mat-button *ngIf="(authService.currentUser$ | async) as user" [mat-menu-trigger-for]="userMenu">
      {{ user.email }}
      <mat-icon>expand_more</mat-icon>
    </button> -->


    <mat-menu #userMenu="matMenu">
      <button mat-menu-item (click)="logout()">
        <mat-icon>logout</mat-icon>
        Logout
      </button>
    </mat-menu>
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
  router = inject(Router);

  currentUser = this.authService.currentUser;

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  } 
}
