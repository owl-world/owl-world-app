import { Member } from './member';

export type Comment = {
  content: string;
  createdAt: string;
  id: number;
  memberDto: Member;
};

export type CommentRequest = {
  postId: number;
  comment: string;
};
