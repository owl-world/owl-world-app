export type Like = 'post' | 'answer';

export type LikeRequest = {
  targetId: number;
  type: Like;
};
