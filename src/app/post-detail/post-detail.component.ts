import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../posts/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  editPostFlag = false;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPostById();
  }

  getPostById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postsService.getPostById(id).subscribe(
      data => this.post = data,
      err => console.error(err)
    );
  }

  switchToEdit(): boolean {
    return this.editPostFlag = !this.editPostFlag;
  }
}
