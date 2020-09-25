import { Author, AuthorInterface } from './author.model';

export interface CommentsResponseInterface {
    comments: CommentInterface[]
}


export interface CommentInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: AuthorInterface
}


export class Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Author
}