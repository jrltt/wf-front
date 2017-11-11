import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsService } from './posts.service';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MatButtonModule, MatDialog } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialog
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
