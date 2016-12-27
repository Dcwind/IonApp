import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    this.getPosts('sports',5);
  }

  getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribe(response => {
      this.items = response.data.children;
      console.log(response);
    })
  }

}