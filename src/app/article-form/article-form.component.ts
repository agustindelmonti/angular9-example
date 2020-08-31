import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  show = false;
  form: FormGroup;
  loading = false;
  submitted = false;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      body: ['', Validators.required],
      tagList: [[]],
    });
  }

  toggle() {
    this.show = !this.show;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    const article = { article: this.form.value };
    this.articlesService.createArticle(article).subscribe(
      (data) => {
        this.show = false;
        this.form.reset();
      },
      (error) => {
        this.error = true;
        this.loading = false;
        this.submitted = false;
      }
    );
  }

  onCancel() {
    this.show = false;
    this.form.reset();
  }
}
