import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }
}
