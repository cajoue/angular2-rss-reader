import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*private feedUrl: string = 'http://www.20min.ch/rss/rss.tmpl?type=channel&get=20&lang=ro';*/
  // if necessary, process the required link on this page:
  // https://rss2json.com and use the rss_url
  /*private feedUrl: string = 'http%3A%2F%2Fwww.20min.ch%2Frss%2Frss.tmpl%3Ftype%3Dchannel%26get%3D20%26lang%3Dro';*/
  private feedUrl: string = 'https://css-tricks.com/feed/';
  /*private feedUrl: string = 'https://www.becompany.ch/en/blog/feed.xml';*/
  /*private feedUrl: string = 'https://techcrunch.com/feed/';*/
  /*private feedUrl: string = 'http://www.rockclimbing.com/rss/routes/ascents/new.xml';*/

  private feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
                    .subscribe(
                      feed => this.feeds = feed.items,
                      error => console.log(error)
                    );
  }
}
