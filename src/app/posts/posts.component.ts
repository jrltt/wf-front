import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from './posts';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
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

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {
        title: this.title,
        type: 'create'
      },
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result && result.post) {
          console.log('results w/data', result);
        }
      }
    );
  }

  openDialogRemove(id: number): void {
    const removePost = this.posts.find((post: IPost) => post.id === id);
    console.log('removePost', removePost);
    this.dialog.open(
      ModalComponent,
      {
        width: '450px',
        data: {
          type: 'remove',
          post: (removePost) ? removePost : null
        }
      }
    );
  }
}
