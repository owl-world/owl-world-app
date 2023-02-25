export type SignInEntity = {
  email: string;
  password: string;
};

export type TokenBody = {
  memberId: number;
  nickname: string;
  email: string;
  majorId: number;
  majorName: string;
  universityId: number;
  universityName: string;
  universityLogo: string;
  iat: number;
  exp: number;
};
