import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getSTO().subscribe((res)=>{
      this.loginService.login(res.init_token).subscribe((res)=>{
        console.log(res)
        localStorage.setItem('access-token',res.acces_token);
        localStorage.setItem('user-id',res.user_id);
        localStorage.setItem('renew-token',res.renew_token);
      })
    })
  }



}
