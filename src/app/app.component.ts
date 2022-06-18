import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isHomepage: boolean = true;
  isLoginPage: boolean = true;
  loggedIn: boolean = false;

  constructor(public router: Router,public loginService: LoginService) {
    this.router.events.subscribe((ev)=>{
      if (localStorage.getItem('user-id')) this.loggedIn = true;
      if(ev instanceof NavigationEnd){
        this.isHomepage = ev.url === "/";
        this.isLoginPage = ev.url === "/login" || ev.url === "/register";
      }
    })
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
