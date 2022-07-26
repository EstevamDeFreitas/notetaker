import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  hasError = false;
  errorMessage = "";

  constructor(private authService:AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login({email: this.loginForm.controls['email'].value, password:this.loginForm.controls['password'].value}).subscribe({
      next: (res) =>{
        AuthService.setToken(res.data);
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        this.hasError = true;
        this.errorMessage = err.error.message;
      }
    });
  }

}
