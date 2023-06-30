import { Member } from './member';
import { PostsResponse } from './post';
import { QuestionResponse } from './qna';
import { University } from './university';

export type Search = {
  keyword: string;
  posts: PostsResponse;
  questions: QuestionResponse;
  articles: Article[];
};

export type Article = {
  answerCount: number;
  content: string;
  createdAt: string;
  id: number;
  likeCount: number;
  liked: boolean;
  member: Member;
  title: string;
  type: string;
  universityDto: University;
};
