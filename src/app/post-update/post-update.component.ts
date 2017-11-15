import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IPost } from '../posts/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostUpdateComponent implements OnInit {
  @Input() post: IPost;
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
  }

  update(): any {
    // TODO: check this.post params
    this.postService.updatePost(this.post).subscribe(
      result => this.post = result,
      err => console.error(err)
    );
  }
}
