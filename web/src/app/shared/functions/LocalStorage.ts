import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
    lsSet(key: string, value: any){
      return localStorage.setItem(key, value)
    }

    lsGet(key: string){
      return localStorage.getItem(key)
    }

    lsClear(){
      return localStorage.clear()
    }
}
