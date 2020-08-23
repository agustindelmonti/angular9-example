export class Article {
  title: String;
  body: String;
  createdAt: Date;
  updatedAt: Date;
  tags: String[] = [];
  description: String;
  author: Object;
  favorited: Boolean;
  favoritesCount: Number;
}
