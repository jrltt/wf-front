import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsService } from './posts.service';
import { ImagesService } from './images.service';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ModalComponent } from './modal/modal.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostRemoveComponent } from './post-remove/post-remove.component';
import { PostUpdateComponent } from './post-update/post-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    ModalComponent,
    PostCreateComponent,
    PostRemoveComponent,
    PostUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    PostsService,
    ImagesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
