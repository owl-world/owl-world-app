import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Star } from './Star';

type Props = {
  count?: number;
  rating: number;
  size: number;
  onChange?: (rating: number) => void;
};

const DEFAULT_COUNT = 5;

export const Stars = ({ count = DEFAULT_COUNT, rating, size, onChange }: Props) => {
  const onChangeStar = (idx: number) => {
    if (!onChange) {
      return;
    }

    onChange(idx);
  };

  return (
    <React.Fragment>
      {Array(count)
        .fill(0)
        .map((_, idx) => {
          return (
            <TouchableOpacity onPress={() => onChangeStar(idx + 1)} key={idx} disabled={!onChange}>
              {idx < rating ? <Star size={size} isFill={true} /> : <Star size={size} />}
            </TouchableOpacity>
          );
        })}
    </React.Fragment>
  );
};
