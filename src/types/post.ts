import { Comment } from './comment';
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

export type PostsResponse = {
  totalPages: number;
  totalElements: number;
  posts: Post[];
};
