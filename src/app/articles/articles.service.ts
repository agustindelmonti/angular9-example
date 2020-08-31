import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getArticles(offset: number, limit: number) {
    return this.http.get<any>(
      `${this.url}/articles/?offset=${offset}&limit=${limit}`
    );
  }

  createArticle(article: any) {
    return this.http.post<any>(`${this.url}/articles`, article);
  }

  getTags() {
    return this.http.get<any>(`${this.url}/tags`);
  }
}
