import { format } from 'date-fns';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Article } from '@/types/search';
import { Row } from '../Grid';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  post: Article;
  onPress: (id: number) => void;
};

export const FreePostRowForSearch = React.memo(({ post, onPress }: Props) => {
  const isNow = (date: string) => {
    const now = new Date();
    const createdAt = new Date(date);

    now.setMinutes(now.getMinutes() - 1);

    return now.getTime() < createdAt.getTime();
  };

  return (
    <Pressable onPress={() => onPress(post.id)}>
      <Row style={styles.headerContainer}>
        <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/free-post.png')} />
        <SplitColumn width={5} />

        <View>
          <Row>
            <Text style={styles.titleText}>자유게시판</Text>
            <SplitColumn width={3} />
            <Text style={styles.dateText}>
              {isNow(post.createdAt) ? '방금' : format(new Date(post.createdAt), 'MM/dd hh:mm')}
            </Text>
          </Row>
          <Text style={styles.nicknameText}>{post.member.nickname}</Text>
        </View>
      </Row>

      <SplitRow height={10} />

      <View style={styles.mainContainer}>
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
            <Text style={styles.interactionText}>{post.answerCount || 0}</Text>
          </Row>
        </Row>

        <SplitRow height={2} />

        <Text style={styles.content}>{post.content}</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
  },
  mainContainer: {
    backgroundColor: '#FBFBFB',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 7,
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
  titleText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  dateText: {
    color: '#909090',
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 20,
    alignSelf: 'flex-end',
  },
  nicknameText: {
    color: '#262626',
    fontSize: 11,
    fontWeight: '500',
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
  logo: {
    width: 36,
    height: 36,
  },
});
