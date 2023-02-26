import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Post } from '@/types/post';
import { SplitColumn } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  post: Post;
};

export const PostRow = ({ post }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{post.title}</Text>
      <View style={styles.interactionContainer}>
        <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/filled_heart.png')} />
        <SplitColumn width={1} />
        <Text style={styles.interactionText}>{post.likeCount}</Text>
        <SplitColumn width={2} />
        <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
        <SplitColumn width={1} />
        <Text style={styles.interactionText}>{post.commentCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    color: '#6A6A6A',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  interactionIcon: {
    width: 12,
    height: 12,
  },
  interactionText: {
    color: '#696969',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
  },
});
