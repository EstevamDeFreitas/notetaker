import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    repassword : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  hasError : boolean = false;
  errorMessage : string = ""

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  validatePassword() : string{
    if(this.loginForm.controls['password'].value != this.loginForm.controls['repassword'].value){
      return 'The passwords must match.'
    }

    if(this.loginForm.controls['password'].hasError('minlength') || this.loginForm.controls['repassword'].hasError('minlength')){
      return 'The password must have at least 8 characters'
    }

    return '';
  }

  createAccount(){
    this.authService.register({email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}).subscribe({
      next: (res) => {
        this.redirectToLogin();
      },
      error: (err) => {
        this.hasError = true;
        this.errorMessage = err.error.message;
      }
    });
  }

  redirectToLogin(){
    this.router.navigate(['/']);
  }

}
