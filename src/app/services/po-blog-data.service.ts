import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoBlog } from '../domain/po-blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoBlogDataService {
  private url: string = '../../assets/poblogdata.json';

  constructor(private http: HttpClient) { }

  getBlogData(): Observable<PoBlog[]> {
    return this.http.get<PoBlog[]>(this.url);
  }
}
