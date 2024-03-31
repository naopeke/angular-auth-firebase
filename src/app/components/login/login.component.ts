import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <div class="card mat-elevation-z5">
      <h1>Login</h1>
      <form [formGroup]="loginForm" (ngSubmit)="login()">
        
        <mat-form-field>
          <mat-label>Email address</mat-label>
          <input matInput formControlName="email"/>
          <mat-error *ngIf="email?.hasError('required')">
            Email address is required
          </mat-error>
          <mat-error *ngIf="email?.hasError('email')">
            Please enter a valid email address
          </mat-error>
        </mat-form-field>
        
        <mat-form-field>
          <mat-label>Password</mat-label>
          <input type="password" matInput formControlName="password" />
          <mat-error *ngIf="password?.hasError('required')">
            Password is required
          </mat-error>
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

  //Angular 14以降のバージョンで導入されたスタンドアロンコンポーネントでは、inject 関数を使ってサービスや他のトークンをインジェクトすることができますが、inject 関数を使用するためには、@angular/core からそれをインポートする必要があります。
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  notificationService = inject(NotificationService);

  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  
  async login(){
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password){
      return;
    }

    //loading
    this.notificationService.showLoading();

    await this.authService.login(email, password);
    this.router.navigate(['/home']);
    console.log('Validation passed');

    //loading
    this.notificationService.hideLoading();
  }

  email = this.loginForm.get('email');
  password = this.loginForm.get('password');

}
