export interface AuthorInterface {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}


export class Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}