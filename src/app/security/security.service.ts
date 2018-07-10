import { Injectable } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { Observable, of } from 'rxjs';
import { LOGIN_MOCKS } from './login-mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor() { }

  login(entity: AppUser): Observable<AppUserAuth>{
    this.resetSecurityObject();

    Object.assign(this.securityObject,
    LOGIN_MOCKS.find(user => user.userName.toLocaleLowerCase() === entity.userName.toLocaleLowerCase()));

    if (this.securityObject.userName !== ""){
      //store token into local storage
      localStorage.setItem("bearerToken", this.securityObject.bearerToken)
    }

    return of<AppUserAuth>(this.securityObject);
  }

  logout(): void{
    this.resetSecurityObject();
  }

  resetSecurityObject(): void{
    this.securityObject.userName = "";
    this.securityObject.bearerToken = ""
    this.securityObject.isAuthenticated = false;

    this.securityObject.canCreateToDoItems = false;
    this.securityObject.canEditProfile= false;
    this.securityObject.canEditTodoItems=false;
    this.securityObject.canDeleteToDoItems=false;
  }
}
