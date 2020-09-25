import { ArticleDetailResolver } from './resolvers/article-detail.resolver';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleCommentsResolver } from './resolvers/article-comments.resolver';

const routes: Routes = [
    { 
        path: '', 
        component: ArticleComponent 
    },
    {
        path: 'article/:articleSlug',
        component: ArticleDetailComponent,
        resolve: {
            article: ArticleDetailResolver,
            comments: ArticleCommentsResolver
        }
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
