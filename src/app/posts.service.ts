import { Injectable } from '@angular/core';
import { IPosts } from './posts/posts';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): IPosts[] {
    return [
      {
        title: 'Madrid',
        content: 'Lorem   ipsum   dolor   sit   amet,   consectetur   adipiscing   elit.',
        lat: 40.41678,
        long: -3.70379,
        image_url: 'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg'
      }
    ];
  }
}
