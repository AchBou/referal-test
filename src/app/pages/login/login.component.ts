import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  showIncorrectCredits = false;

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }


  submit(f: NgForm) {
    if (f.valid){
      localStorage.clear();
      this.loginService.getSTO().subscribe((res)=>{
        this.loginService.login(res.init_token,{'username':this.username,'password':this.password}).subscribe((res)=>{
          if(res.status === 401) this.showIncorrectCredits = true;
          else if(res.status === 200){
            console.log(res)
            localStorage.setItem('access-token',res.access_token);
            localStorage.setItem('user-id',res.user_id);
            localStorage.setItem('renew-token',res.renew_token);
            this.router.navigate(['/home'])
          }
        })
      })
    }

  }
}
