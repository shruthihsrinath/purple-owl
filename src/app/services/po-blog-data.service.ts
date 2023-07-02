import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../domain/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoBlogDataService {
  private url: string = '../../assets/poblogdata.json';

  constructor(private http: HttpClient) { }

  getBlogData(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url);
  }
}
