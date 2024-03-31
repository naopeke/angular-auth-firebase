import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  template: `
  <mat-toolbar color='primary'>Angular Sign Up App</mat-toolbar>

  <div class="container">
    <router-outlet></router-outlet>
  </div>
    `,
  styles: [`
    .container {
      padding: 24px;
    }
  `],
})
export class AppComponent {
  title = 'auth-firebase';
}
