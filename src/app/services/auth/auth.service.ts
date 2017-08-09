import { Injectable } from '@angular/core';
import { LocalstorageService } from '../local.storage/localstorage.service';


@Injectable()
export class AuthService {

  constructor(private localstorageService:LocalstorageService) { }

  isAuthenticated():boolean {
    return this.localstorageService.retrieve(LocalstorageService.AUTHENTICATED_STORAGE_KEY);
  }

}
