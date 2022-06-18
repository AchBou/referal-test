import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: any;
  password: any;
  email: any;

  constructor( public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    if(f.valid){
      this.loginService.getSTO().subscribe((res)=>{
        this.loginService.login(res.init_token,{'username':this.username,'password':this.password, 'email': this.email}).subscribe((res)=>{
          if(res.status === 401) console.log('err: ',res);
          else if(res.status === 200){
            console.log(res)
            this.router.navigate(['/login'])
          }
        })
      })
    }
  }
}
