import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { RedditPage } from '../reddit/reddit';

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

  setDefault(){
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditPage);
  }

  



}