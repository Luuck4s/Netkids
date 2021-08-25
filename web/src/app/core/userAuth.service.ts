import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let url: String;

if(process.env.NODE_ENV == "production"){
  url = 'http://localhost:3333/api/v1/auth/user';
}else {
  url = 'http://localhost:3333/api/v1/auth/user';
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private http: HttpClient) { }
}
