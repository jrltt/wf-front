import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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

  removePost(id: number): Observable<any> {
    const removeUrl = `${this.domain}${this.list}/${id}`;
    return this.http.delete<void>(removeUrl).pipe(
      catchError(this.handleError<IPost>(`Fail on delete id`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
