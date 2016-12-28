import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    this.getDefault();

  }

  ngOnInit(){
    this.getPosts(this.category,this.limit);
  }

  getDefault(){
    this.category = 'sports';
    this.limit = 10;
  }

  getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribe(response => {
      this.items = response.data.children;
      console.log(response);
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  changeCategory(){
    this.getPosts(this.category,this.limit);
  }

}