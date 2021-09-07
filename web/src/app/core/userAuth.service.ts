import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

let url: String;

if(process.env.NODE_ENV == "development"){
  url = 'http://localhost:3333/api/v1/auth';
}else {
  url = 'https://api.netkids.gq/api/v1/auth';
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private baseUrl = url;

  constructor(private http: HttpClient) { }

  login(data: Object): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/user`, data)
  }
}
