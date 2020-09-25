import { plainToClass } from 'class-transformer';
import { ArticleInterface } from './../models/article.model';
import { CommentInterface } from './../models/comment.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CommentsResponseInterface } from '../models/comment.model';
import { Article } from '../models/article.model';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private url = environment.baseUrl;

    constructor(
        private http: HttpClient,
    ) { }



    getArticle(slug: string) {
        return this.http.get<{article: ArticleInterface}>(`${this.url}/articles/${slug}`).pipe(
            map(response => response.article)   
        );
    }


    getArticleComments(slug: string) {
        return this.http.get<{comments: CommentInterface[]}>(`${this.url}/articles/${slug}/comments`).pipe(
            map(response => response.comments)
        );
    }


    postComment(payload: {article: Article, commentBody: string}) {
        return this.http.post<{comment: CommentInterface}>(
            `${this.url}/articles/${payload.article.slug}/comments`, 
            {
                comment: {
                    body: payload.commentBody
                }
            });
    }

}