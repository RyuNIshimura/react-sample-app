export interface Article {
  id: string;
  title: string;
  content: string;
  like: boolean;
  otherLike: boolean;
  matched: boolean;
}
export interface State {
  articles: Array<Article>;
}