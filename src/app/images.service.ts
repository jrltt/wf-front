import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagesService {
  pixabayDomain = 'https://pixabay.com/api';
  apiKey = '7062429-ef4ace024a6a17ba2b30613ea';
  image_type = 'photo';
  per_page = 9;
  orientation = 'horizontal';
  constructor(
    private http: HttpClient
  ) { }
  getImages(param: any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const url = `${this.pixabayDomain}/?key=${this.apiKey}&q=${param}&image_type=${this.image_type}&per_page=${this.per_page}&orientation=${this.orientation}`;
    return this.http.get(url);
  }
}
