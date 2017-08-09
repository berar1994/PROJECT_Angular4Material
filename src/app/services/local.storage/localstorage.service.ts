import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  public static AUTHENTICATED_STORAGE_KEY:string = "isAuthenticated";
  
  constructor() { }

  store(key:string, value:any){
    console.log(key + '  ' + value);
    localStorage.setItem(key, value);
  }

  retrieve(key:string): any{
    return localStorage.getItem(key);
  }


  clear(){
    localStorage.clear();
  }

}
