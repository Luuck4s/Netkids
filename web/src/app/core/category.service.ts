import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Category} from "../shared/models/Category";

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

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`)
  }
}
