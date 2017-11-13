import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IPost } from '../posts/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-remove',
  templateUrl: './post-remove.component.html',
  styleUrls: ['./post-remove.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostRemoveComponent implements OnInit {
  @Input() post: IPost;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  removeById(id: number): void {
    this.postsService.removePost(id).subscribe(
      response => {
        console.log('done');
      },
      err => console.error(err)
    )
  }
}
