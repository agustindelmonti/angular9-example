import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articles: any[] = [];
  offset = 0;
  limit = 10;
  constructor(private service: ArticlesService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    const newArticles = this.service
      .getArticles(this.offset, this.limit)
      .subscribe((res) => this.articles.push(...res.articles));
    this.offset += this.limit;
  }

  toggleFollow() {}
}
