import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Film} from "../shared/models/Film";

let url: String;

url = 'http://localhost:3333/api/v1/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = url;

  constructor(private http: HttpClient) { }

  list(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}`)
  }
}
