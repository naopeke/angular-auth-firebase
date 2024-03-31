import { Injectable, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  loading = signal(false);

  showLoading(){
    this.loading.set(true);
  }

  hideLoading(){
    this.loading.set(false);
  }

  snackbar = inject(MatSnackBar);
  success(message:string){
    this.snackbar.open(message, undefined, { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});
  }
}
