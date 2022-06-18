import { Component, OnInit } from '@angular/core';
import {ReferalService} from "../../services/referal/referal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  referral: string = '';

  constructor(public referralService: ReferalService) { }

  ngOnInit(): void {
    this.referralService.getReferalCode().subscribe((res)=>{
      this.referral = res.ref_code
    })
  }

}
