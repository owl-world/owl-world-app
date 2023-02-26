import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Post } from '@/types/post';
import { InteractionButton } from '../Button/InteractionButton';
import { SplitColumn } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  post: Post;
  onPress: (postId: number) => void;
};

export const PostRow = ({ post, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => onPress(post.id)}>
      <Text style={styles.text} numberOfLines={1}>
        {post.title}
      </Text>

      <View style={styles.interactionContainer}>
        <InteractionButton type="like" count={post.likeCount} />
        <SplitColumn width={2} />
        <InteractionButton type="comment" count={post.commentCount} />
      </View>
    </TouchableWithoutFeedback>
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
});
