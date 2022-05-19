import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';


  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }


  submit() {
    localStorage.clear();
    this.loginService.getSTO().subscribe((res)=>{
      this.loginService.login(res.init_token,{'username':this.username,'password':this.password}).subscribe((res)=>{
        localStorage.setItem('access-token',res.access_token);
        localStorage.setItem('user-id',res.user_id);
        localStorage.setItem('renew-token',res.renew_token);
        this.router.navigate(['/home'])
      })
    })
  }
}
