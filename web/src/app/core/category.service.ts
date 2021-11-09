import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Category} from "../shared/models/Category";
import {Headers} from "../shared/functions/Headers";


let url: String;

if(process.env.NODE_ENV == "development"){
  url = 'http://localhost:3333/api/v1/category';
}else {
  url = 'https://api.netkids.gq/api/v1/category';
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = url;

  constructor(private http: HttpClient, private headers:Headers) { }


  get(id: any): Observable<any>{
    return this.http.get<Category>(`${this.baseUrl}/${id}`, {headers: this.headers.headersUser()})
  }

  create(data: any): Observable<any>{
    return this.http.post<Category>(`${this.baseUrl}`, data, {headers: this.headers.headersUser()})
  }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`)
  }

  delete(id: any): Observable<any>{
    return this.http.delete<Category>(`${this.baseUrl}/${id}`,{headers: this.headers.headersUser()})
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put<Category>(`${this.baseUrl}/${id}`,data,{headers: this.headers.headersUser()})
  }
}
