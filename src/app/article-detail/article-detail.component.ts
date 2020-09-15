import { ArticleService } from './../services/article.service';
import { plainToClass } from 'class-transformer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';
import { User } from './../models/user.model';
import { LoginService } from './../services/login.service';
import { cpuUsage } from 'process';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

    article: Article;
    comments: Comment[];
    user: User;
    
    userSubscription: Subscription;
    
    commentForm: FormGroup;

    constructor(
        private articleService: ArticleService,
        private loginService: LoginService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.initializeForm();
        this.loadArticleAndComments();
        this.getUser();    
        
        //this.loginService.authenticator('lucas@das.com', '12341234');
        //this.loginService.logout();
    }

    initializeForm() {
        this.commentForm = new FormGroup({
            commentControl: new FormControl('', Validators.required)
        });
    }

    loadArticleAndComments() {
        this.article = this.route.snapshot.data['article'];
        this.comments = this.route.snapshot.data['comments'];

    }

    getUser() {
        this.userSubscription = this.loginService.getUserObservable()
            .subscribe((user: User) => this.user = user);
    }


    onSubmit() {
        this.articleService.postComment({
            article: this.article,
            commentBody: this.commentForm.controls.commentControl.value
        }).subscribe(() => {
            this.articleService.getArticleComments(this.article.slug)
                .subscribe(comments => this.comments = comments);

        });
    }


    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
