import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferalService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://eks.sefapool-test.gotbitgames.co'

  getReferalCode(): Observable<any> {
    let token = String(localStorage.getItem('access-token'));
    let userId = String(localStorage.getItem('user-id'));
    console.log(userId)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': token,
        'user-id': userId,
      })
    };
    console.log(httpOptions)
    let body = {'user_id':userId}
    console.log(body)
    return this.http.post<any>(this.baseUrl+'/referrals/get_ref_code', {'user_id':userId}, httpOptions)

  }

}
