import { University } from './university';

export type Review = {
  createdAt: string;
  id: number;
  question: string;
};

export type ReviewRequest = number[];

export type BookMark = {
  totalScores: number[];
  universityDto: University;
};
