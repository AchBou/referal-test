import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ref';
  constructor(public loginService: LoginService) {
    this.loginService.getSTO().subscribe((res)=>{
      this.loginService.login(res.init_token).subscribe((ress)=>{
        console.log(ress)
      })
    })
  }
}
