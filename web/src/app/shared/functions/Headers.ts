import {Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";
import {LocalStorage} from "./LocalStorage";

@Injectable({
  providedIn: 'root'
})
export class Headers {
  constructor(private storage:LocalStorage) {
  }

  headersUser(){
    let token = this.storage.lsGet("auth")
    let headers = new HttpHeaders();

    if(token){
      headers = headers.set("Authorization", token)
    }

    return headers
  }
}
