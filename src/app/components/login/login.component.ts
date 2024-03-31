import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="card mat-elevation-z5">
      <h1>Login</h1>
      <form>
        
        <mat-form-field>
          <mat-label>Email address</mat-label>
          <input matInput />
        </mat-form-field>
        
        <mat-form-field>
          <mat-label>Password</mat-label>
          <input type="password" matInput />
        </mat-form-field>

        <div class="center margin-top">
          <button type="submit" mat-raised-button color="primary">Login</button>
        </div>

      </form>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent {

}
