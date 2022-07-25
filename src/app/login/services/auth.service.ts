import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userDto } from '../models/userDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUlr = environment.api + "/user"

  constructor(private http : HttpClient) { }

  static getToken() : string | null{
    return localStorage.getItem('token');
  }

  static setToken(token : string){
    localStorage.setItem('token', token);
  }

  public login(user : userDto) : Observable<string>{
    return this.http.post<string>(this.apiUlr + "/login", user);
  }

  public register(user : userDto) : Observable<any>{
    return this.http.post<any>(this.apiUlr, user);
  }
}
