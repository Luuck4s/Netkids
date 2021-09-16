import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Utils {
  cleanString(text: string){
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\W/g, '_')
      .toLowerCase();

  }
}
