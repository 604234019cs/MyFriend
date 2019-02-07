import { ProfileListPage } from './../profile-list/profile-list';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showProfileList(categoryName:string){

    this.navCtrl.push(ProfileListPage,
      {category:categoryName}
      );
  }
  
}
