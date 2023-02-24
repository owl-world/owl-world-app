import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Star } from './Star';

type Props = {
  count?: number;
  rating: number;
  onChange: (rating: number) => void;
};

const DEFAULT_COUNT = 5;

export const Stars = ({ count = DEFAULT_COUNT, rating, onChange }: Props) => {
  return (
    <React.Fragment>
      {Array(count)
        .fill(0)
        .map((_, idx) => {
          return (
            <TouchableOpacity onPress={() => onChange(idx + 1)} key={idx}>
              {idx < rating ? <Star isFill={true} /> : <Star />}
            </TouchableOpacity>
          );
        })}
    </React.Fragment>
  );
};
