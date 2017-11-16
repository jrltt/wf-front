import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost } from '../posts/posts';
import { Post } from '../posts/post';
import { PostsService } from '../posts.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostCreateComponent implements OnInit {
  post: IPost = new Post;
  constructor(
    private postService: PostsService,
    public dialog: ModalComponent
  ) {  }

  ngOnInit() {
  }

  createPost(): any {
    console.log(this.post);
    if (Object.keys(this.post).length <= 0) { // TODO: improve UX to show errors to user when fail
      return console.log('error');
    }
    this.postService.createPost(this.post).subscribe(
      (post: IPost) => {
        console.log(`hi there, new post id:${post.id}`);
        this.dialog.dialogRef.close({ post: post });
      },
      (err: any) => {
        console.log(err);
        this.dialog.close();
      }
    );
  }

  closeModal(): void {
    this.dialog.close();
  }
}
