import { Component, OnInit } from '@angular/core';
import {ReferalService} from "../../services/referal/referal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  referal: string = '';

  constructor(public referalService: ReferalService) { }

  ngOnInit(): void {
    this.referalService.getReferalCode().subscribe((res)=>{
      console.log(res)
      this.referal = res.ref_code
    })
  }

}
