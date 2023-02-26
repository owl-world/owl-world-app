import { PostsResponse } from './post';
import { QuestionResponse } from './qna';

export type Search = {
  keyword: string;
  posts: PostsResponse;
  questions: QuestionResponse;
  articles: any;
};
