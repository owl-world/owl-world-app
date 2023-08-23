import { UniversityMajor } from './university';

export type SignUpEntity = {
  email: string;
  password: string;
  university: string | null;
  majorId: number | null;
  nickname: string;
};

export type Member = {
  createdAt: string;
  email: string;
  id: number;
  nickname: string;
  password: string;
  universityMajorDto: UniversityMajor;
};
