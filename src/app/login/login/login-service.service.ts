import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';


@Injectable()
export class LoginServiceService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  private authenticated = false;

  constructor(private router: Router) {}

  signIn(user: User){
    if ((user.email === 'user@email.com' || user.email === 'usuario@email.com')
      && user.password === '123456'){
        this.authenticated = true;
        this.showNavBar(true);
        this.router.navigate(['/']);
      } else {
        this.authenticated = false;
      }
  }

  logout(){
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return this.authenticated;
  }


  showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

}
