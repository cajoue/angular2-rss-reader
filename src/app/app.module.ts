import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material Design modules by Google material.angular.io/
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCoreModule } from '@angular2-material/core';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSpinner } from '@angular2-material/progress-circle';

import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    MdSpinner
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdCoreModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [FeedService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
