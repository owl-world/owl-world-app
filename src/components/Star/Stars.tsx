import React from 'react';
import { Star } from './Star';

type Props = {
  count?: number;
  rating: number;
};

const DEFAULT_COUNT = 5;

export const Stars = ({ count = DEFAULT_COUNT, rating }: Props) => {
  return (
    <React.Fragment>
      {Array(count)
        .fill(0)
        .map((_, idx) => {
          return idx < rating ? <Star isFill={true} /> : <Star />;
        })}
    </React.Fragment>
  );
};
