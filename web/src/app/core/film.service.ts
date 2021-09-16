import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Film} from "../shared/models/Film";
import {LocalStorage} from "../shared/functions/LocalStorage";
import {Headers} from "../shared/functions/Headers";

let url: String;

if(process.env.NODE_ENV == "development"){
  url = 'http://localhost:3333/api/v1';
}else {
  url = 'https://api.netkids.gq/api/v1';
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = url;

  constructor(private http: HttpClient, private storage:LocalStorage, private headers:Headers) { }

  list(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/film`)
  }

  get(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/film/${id}`, {headers: this.headers.headersUser()})
  }

  create(data: any): Observable<any>{
    return this.http.post<Film>(`${this.baseUrl}/admin/film`, data, {headers: this.headers.headersUser()})
  }

  delete(id: any): Observable<any>{
    return this.http.delete<Film>(`${this.baseUrl}/admin/film/${id}`,{headers: this.headers.headersUser()})
  }

  update(id: any, data: any): Observable<any>{
    return this.http.patch<Film>(`${this.baseUrl}/admin/film/${id}`,data,{headers: this.headers.headersUser()})
  }
}
