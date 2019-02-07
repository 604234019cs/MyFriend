import { Profile } from './../../models/profile.models';
import { ProfileResProvider } from './../../providers/profile-res/profile-res';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfiledetailPage } from '../profiledetail/profiledetail';


@Component({
  selector: 'page-profile-list',
  templateUrl: 'profile-list.html',
})
export class ProfileListPage {

  profiles:Profile;

  category:string;

  constructor(private profilerest:ProfileResProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category")
    this.profilerest.getprofilelist().subscribe(data=>{
      this.profiles=data.filter(profile => profile.category === this.category)
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileListPage');
  }

  goBack(){
    this.navCtrl.pop();

  }
  showDetail(studentid:number){
    this.navCtrl.push(ProfiledetailPage,
      {studentid:studentid}
      );
  }

  

}
