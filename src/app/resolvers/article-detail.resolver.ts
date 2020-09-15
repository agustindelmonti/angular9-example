import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ArticleService } from '../services/article.service';


@Injectable({ providedIn: 'root' })
export class ArticleDetailResolver implements Resolve<any> {
    constructor(private service: ArticleService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): any {
        const slug: string = route.params['articleSlug'];

        return this.service.getArticle(slug);
    }
}