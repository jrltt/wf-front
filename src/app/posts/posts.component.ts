import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPosts } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  posts: IPosts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.postsService.getPosts();
  }
}
