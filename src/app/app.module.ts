import { ArticleDetailResolver } from './resolvers/article-detail.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommentComponent } from './article-detail/comment/comment.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        DateAgoPipe,
        ArticleFormComponent,
        ArticleDetailComponent,
        CommentComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,    
        AppRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatDividerModule
    ],
    providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
