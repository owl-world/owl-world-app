import { Member } from './member';
import { University } from './university';

export type QuestionResponse = {
  totalPages: number;
  totalElements: number;
  questions: Question[];
};

export type QuestionRequest = {
  universityId: number;
  content: string;
};

export type Question = {
  id: number;
  title: string;
  content: string;
  answerCount: number;
  answers: Answer[];
  member: Member;
  universityDto: University;
  createdAt: string;
};

export type AnswerRequest = {
  questionId: number;
  answer: string;
};

export type Answer = {
  id: number;
  content: string;
  likeCount: number;
  question: Question;
  member: Member;
  createdAt: string;
  accepted: boolean;
  liked: boolean;
};
