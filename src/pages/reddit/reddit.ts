import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    
  }

}