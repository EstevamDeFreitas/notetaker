import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseBase } from 'src/app/login/models/response';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = environment.api + '/note'

  constructor(private http : HttpClient) { }

  public getNotes() : Observable<ResponseBase<Array<Note>>>{
    return this.http.get<ResponseBase<Array<Note>>>(`${this.url}`)
  }
}
