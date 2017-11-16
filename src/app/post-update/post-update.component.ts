import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from '../posts/posts';
import { PostsService } from '../posts.service';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostUpdateComponent implements OnInit {
  @Input() post: IPost;
  @Output() isUpdated = new EventEmitter<boolean>();
  candidateImagesUrl: any[] = [];
  constructor(
    private postService: PostsService,
    private imageService: ImagesService
  ) { }

  ngOnInit() {
  }

  update(): any {
    // TODO: validate this.post params
    if (this.post.id === null) {
      return console.log('post.id is undefined');
    }
    this.postService.updatePost(this.post).subscribe(
      result => {
        console.log(result);
        this.isUpdated.emit(true);
      },
      err => console.error(err)
    );
  }

  searchImage(param: string): void {
    // TODO: add some type of debounce
    this.imageService.getImages(param).subscribe(
      result => {
        if (result && result.hits) {
          this.candidateImagesUrl = result.hits;
        }
      },
      err => console.error(err)
    );
  }

  setImageUrl(path: string): void {
    this.post.image_url = path;
  }

  setLocation($event: any) {
    this.post.lat = $event.coords.lat;
    this.post.long = $event.coords.lng;
  }
}
