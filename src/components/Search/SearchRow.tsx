import { format } from 'date-fns';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { Post } from '@/types/post';
import { Question } from '@/types/qna';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  type: 'post' | 'question';
  post: Post & Question;
  onPress: (id: number) => void;
};

export const SearchRow = React.memo(({ type, post, onPress }: Props) => {
  const isNow = (date: string) => {
    const now = new Date();
    const createdAt = new Date(date);

    now.setMinutes(now.getMinutes() - 1);

    return now.getTime() < createdAt.getTime();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.row}>
          {type === 'post' ? (
            <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/free-post.png')} />
          ) : (
            <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/free-post.png')} />
          )}
          {/* {true ? (
            <SvgCssUri style={styles.logo} uri={post.memberDto.universityMajorDto.university.logo} />
          ) : (
              <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          )} */}

          <SplitColumn width={4} />
          <View>
            <View style={styles.row}>
              <Text style={styles.question}>{type === 'post' ? '자유게시판' : 'Question'}</Text>
              <SplitColumn width={5} />
              <Text style={styles.createdAt}>{format(new Date(post.createdAt), 'MM/dd hh:mm')}</Text>
            </View>

            <Text style={styles.nickname}>{true ? post.memberDto.nickname : nonMemberNickname}</Text>
          </View>
        </View>
      </View>

      <SplitRow height={9} />

      <TouchableOpacity style={styles.contentContainer} onPress={() => onPress(post.id)}>
        <View style={[styles.titleContainer, styles.row]}>
          <Text style={styles.title}>{post.title}</Text>
          <View style={styles.row}>
            <Image
              style={styles.interactionIcon}
              resizeMode="cover"
              source={require('@/assets/images/filled_heart.png')}
            />
            <SplitColumn width={1} />
            <Text style={styles.interactionText}>{post.likeCount}</Text>
            <SplitColumn width={2} />
            <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
            <Text style={styles.interactionText}>{post.commentCount}</Text>
          </View>
        </View>

        <SplitRow height={5} />
        <Text numberOfLines={1} style={styles.content}>
          {post.content}
        </Text>
        <Text style={styles.footer}>
          {isNow(post.createdAt) ? '방금' : format(new Date(post.createdAt), 'MM/dd hh:mm')}
          <Text style={styles.separator}>ㅣ</Text>
          {post.memberDto.nickname}
        </Text>
      </TouchableOpacity>

      <SplitRow height={9} />

      {type === 'question' && (
        <View style={[styles.footerContainer, styles.row]}>
          <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
          <SplitColumn width={2} />
          <Text style={styles.interactionText}>{post.answerCount}</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  container: {},
  logo: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
  question: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
  },
  createdAt: {
    color: '#909090',
    fontSize: 9,
    fontWeight: '500',
    lineHeight: 20,
  },
  nickname: {
    color: '#262626',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 13,
  },
  heartContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  like: {
    width: 15,
    height: 15,
  },
  likeText: {
    color: '#7A7A7A',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 15,
  },
  contentContainer: {
    minHeight: 70,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#FBFBFB',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  content: {
    color: '#7A7A7A',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
  },
  footerContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    paddingRight: 10,
  },
  interactionIcon: {
    width: 15,
    height: 15,
  },
  interactionText: {
    color: '#909090',
    fontSize: 9,
    fontWeight: '500',
    lineHeight: 13,
  },
  titleContainer: {
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    color: '#262626',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
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
});
