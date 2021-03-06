import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Feed {

  apiUrl:string;
  feedUrl:string;

  constructor(public http: HttpClient) {
    this.apiUrl = 'https://api.rss2json.com/v1/api.json';
    this.feedUrl = 'http://rss.cnn.com/rss';
  }

  getStories(topic){
    return this.http.get(this.apiUrl+'?rss_url='+this.feedUrl+'/'+topic+'.rss');
  }

}
