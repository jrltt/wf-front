import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from './posts';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  title: string;
  constructor(
    private postsService: PostsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(
      data => this.posts = data,
      err => console.error('Something went wrong on getPosts!')
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }
}
