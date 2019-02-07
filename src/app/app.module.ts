import { ProfiledetailPage } from './../pages/profiledetail/profiledetail';


import { ProfileListPage } from './../pages/profile-list/profile-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileResProvider } from '../providers/profile-res/profile-res';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfileListPage,
    ProfiledetailPage
  ],
  imports: [
    HttpClientModule,    
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfileListPage,
    ProfiledetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileResProvider
  ]
})
export class AppModule {}
