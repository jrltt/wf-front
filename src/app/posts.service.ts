import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPost } from './posts/posts';

@Injectable()
export class PostsService {
  private domain = 'https://wf-challenge-w938suq5.herokuapp.com';
  private list = '/posts';
  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]> {
    const listUrl = `${this.domain}${this.list}`;
    return this.http.get<IPost[]>(listUrl);
  }

  getPostById(id: number): Observable<IPost> {
    const showUrl = `${this.domain}${this.list}/${id}`;
    return this.http.get<IPost>(showUrl);
  }

  createPost(data: IPost): Observable<IPost> {
    const listUrl = `${this.domain}${this.list}`;
    return this.http.post<IPost>(listUrl, { post: data });
  }
}
