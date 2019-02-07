import {  Profile } from './../../models/profile.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProfileResProvider {
  private url:string= "https://raw.githubusercontent.com/574234040/Image/master/student.json.txt";

  constructor(public http: HttpClient) {
    console.log('Hello ProfileResProvider Provider');
  }
  getprofilelist():Observable<any>{
      return this.http.get<Profile>(this.url);
  }
}
