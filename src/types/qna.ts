import { Member } from './member';
import { University } from './university';

export type QuestionResponse = {
  totalPages: number;
  totalElements: number;
  questions: Question[];
};

export type Question = {
  id: number;
  title: string;
  content: string;
  answerCount: number;
  answers: null;
  member: Member;
  universityDto: University;
  createdAt: string;
};
