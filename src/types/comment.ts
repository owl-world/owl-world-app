import { Member } from './member';

export type Comment = {
  content: string;
  createdAt: string;
  id: number;
  memberDto: Member;
};

export type CommentResponse = {
  postId: number;
  comment: string;
};
