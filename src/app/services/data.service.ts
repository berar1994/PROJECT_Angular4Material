import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private httpService:Http) { }

  getPosts(){
    return this.httpService.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

}
