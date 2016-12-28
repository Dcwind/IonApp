import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    this.getDefault();

  }



  getDefault(){
    this.category = 'sports';
    this.limit = 10;
  }

  



}