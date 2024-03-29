import { format } from 'date-fns';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Post } from '@/types/post';
import { Row } from '../Grid';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  post: Post;
  onPress: (id: number) => void;
};

export const FreePostRow = React.memo(({ post, onPress }: Props) => {
  const isNow = (date: string) => {
    const now = new Date();
    const createdAt = new Date(date);

    now.setMinutes(now.getMinutes() - 1);

    return now.getTime() < createdAt.getTime();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(post.id)}>
      <Row style={styles.titleContainer}>
        <Text style={styles.title}>{post.title}</Text>

        <Row>
          <Image
            style={styles.interactionIcon}
            resizeMode="cover"
            source={require('@/assets/images/filled_heart.png')}
          />
          <SplitColumn width={1} />
          <Text style={styles.interactionText}>{post.likeCount}</Text>
          <SplitColumn width={2} />
          <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
          <SplitColumn width={1} />
          <Text style={styles.interactionText}>{post.commentCount}</Text>
        </Row>
      </Row>

      <SplitRow height={2} />

      <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">
        {post.content}
      </Text>
      <Text style={styles.footer}>
        {isNow(post.createdAt) ? '방금' : format(new Date(post.createdAt), 'MM/dd hh:mm')}
        <Text style={styles.separator}>ㅣ</Text>
        {post.memberDto.nickname}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: '#FBFBFB',
    borderRadius: 10,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 1.5,
  },
  titleContainer: {
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    color: '#262626',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  content: {
    color: '#7A7A7A',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
  },
  footer: {
    color: '#7A7A7A',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,
  },
  separator: {
    color: '#DCDCDC',
    fontSize: 10,
    fontWeight: '100',
    lineHeight: 20,
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
