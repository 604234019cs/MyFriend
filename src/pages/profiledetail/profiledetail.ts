import { ProfileResProvider } from './../../providers/profile-res/profile-res';
import { Profile } from './../../models/profile.models';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-profiledetail',
  templateUrl: 'profiledetail.html',
})
export class ProfiledetailPage {

  studentid:number;
  Profile:Profile;
  constructor(public profilerest:ProfileResProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentid=this.navParams.get("studentid");
    this.profilerest.getprofilelist().subscribe(data=>{
      this.Profile=data.filter(profile => profile.studentid === this.studentid)[0];
    })

  }

  ionViewDidLoad() {
    this.studentid=this.navParams.get("studentid");
    console.log(this.studentid);
    
  }
  goBack(){
    this.navCtrl.pop();
  }

}
