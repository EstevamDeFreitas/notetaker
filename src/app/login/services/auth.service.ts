import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userDto } from '../models/userDto';
import { environment } from 'src/environments/environment';
import { ResponseBase } from '../models/response';

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

  public login(user : userDto) : Observable<ResponseBase<string>>{
    return this.http.post<ResponseBase<string>>(this.apiUlr + "/login", user);
  }

  public register(user : userDto) : Observable<ResponseBase<undefined>>{
    return this.http.post<ResponseBase<undefined>>(this.apiUlr, user);
  }
}
