import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
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
export class AvaliationService {
  private baseUrl = url;

  constructor(private http: HttpClient, private headers:Headers) { }


  createOrUpdate(data: Object): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/avaliation`, data, {headers: this.headers.headersUser()})
  }

}
