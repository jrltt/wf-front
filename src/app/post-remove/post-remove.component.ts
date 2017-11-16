import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IPost } from '../posts/posts';
import { PostsService } from '../posts.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-post-remove',
  templateUrl: './post-remove.component.html',
  styleUrls: ['./post-remove.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostRemoveComponent implements OnInit {
  @Input() post: IPost;
  constructor(
    private postsService: PostsService,
    public dialog: ModalComponent
  ) { }

  ngOnInit() {
  }

  removeById(id: number): void {
    this.postsService.removePost(id).subscribe(
      response => {
        this.dialog.dialogRef.close({ done: true });
      },
      err => console.error(err)
    );
  }

  closeModal(): void {
    this.dialog.close();
  }
}
