import { Comment } from '@babel/types';
import { Member } from './member';

export type Post = {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
  commentCount: number;
  likeCount: number;
  liked: boolean;
  memberDto: Member;
  createdAt: string;
};

export type PostResponse = {
  totalPages: number;
  totalElements: number;
  posts: Post[];
};
