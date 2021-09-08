import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Film} from "../shared/models/Film";
import {LocalStorage} from "../shared/functions/LocalStorage";
import {Headers} from "../shared/functions/Headers";

let url: String;

if(process.env.NODE_ENV == "development"){
  url = 'http://localhost:3333/api/v1/film';
}else {
  url = 'https://api.netkids.gq/api/v1/film';
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = url;

  constructor(private http: HttpClient, private storage:LocalStorage, private headers:Headers) { }

  list(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}`)
  }

  get(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`, {headers: this.headers.headersUser()})
  }
}
