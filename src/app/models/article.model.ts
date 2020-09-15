import { Author } from './author.model';


export interface ArticleInterface {
    slug: string;
    title: string;
    body: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    author: Author;
    favorited: Boolean;
    favoritesCount: Number;
}


export class Article {
    slug: string;
    title: string;
    body: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[] = [];
    author: Author;
    favorited: Boolean;
    favoritesCount: Number;
}
