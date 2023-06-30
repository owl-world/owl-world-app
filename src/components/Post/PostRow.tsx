import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { Post } from '@/types/post';
import { InteractionButton } from '../Button/InteractionButton';
import { SplitColumn } from '../SplitSpace';
import { Text } from '../Text';

const { height } = Dimensions.get('screen');

type Props = {
  post: Post;
  onPress: (postId: number) => void;
};

export const PostRow = ({ post, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(post.id)}>
      <Text style={styles.text} numberOfLines={1}>
        {post.title}
      </Text>

      <View style={styles.interactionContainer}>
        <InteractionButton type="like" count={post.likeCount} />
        <SplitColumn width={2} />
        <InteractionButton type="comment" count={post.commentCount} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: height * 0.015,
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
});
