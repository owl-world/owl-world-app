import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Row } from '../Grid';
import { SplitColumn } from '../SplitSpace';
import { Text } from '../Text';

type Type = 'like' | 'comment';

type Props = {
  type: Type;
  count: number;
};

export const InteractionButton = ({ type, count }: Props) => {
  return (
    <Row>
      {type === 'comment' ? (
        <Image style={styles.icon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
      ) : (
        <Image style={styles.icon} resizeMode="cover" source={require('@/assets/images/filled_heart.png')} />
      )}
      <SplitColumn width={1} />
      <Text style={styles.text}>{count}</Text>
    </Row>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 12,
    height: 12,
  },
  text: {
    color: '#696969',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
  },
});
