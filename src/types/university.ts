export type University = {
  code: string;
  createdAt: string;
  id: number;
  logo: string;
  name: string;
};

export type UniversityMajor = {
  competitive: number;
  createdAt: string;
  id: number;
  name: string;
  period: string;
  total: number;
  type: string;
  university: University;
};
