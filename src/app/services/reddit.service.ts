import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class RedditServices {
    http: any;
    baseUrl: string;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';

        getPosts(){
            return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit);        }

    }

}