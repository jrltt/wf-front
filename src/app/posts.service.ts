import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPosts } from './posts/posts';

@Injectable()
export class PostsService {
  private domain = 'https://wf-challenge-w938suq5.herokuapp.com';
  private list = '/posts';
  constructor(
    private http: HttpClient
  ) { }

  getPosts(): any {
    const listUrl = `${this.domain}${this.list}`;
    return this.http.get(listUrl);
  }
}
