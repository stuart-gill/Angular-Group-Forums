import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    WelcomeComponent,
    TopicListComponent,
    TopicDetailsComponent,
    PostDetailsComponent,
    NewPostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
