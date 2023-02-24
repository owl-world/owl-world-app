import { format } from 'date-fns';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { Comment } from '@/components/Comment';
import { Header } from '@/components/Header';
import { CommentInput } from '@/components/Input/CommentInput';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { Post } from '@/types/post';

const { height } = Dimensions.get('screen');

type Props = {
  post: Post;
  comment: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

export const FreePostDetailPresenter = ({ post, comment, onChange, onPressEnter }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="자유게시판" subTitle="올빼미광장" />

      <SplitRow height={30} />

      <ScrollView style={styles.fullScreen}>
        <View style={[styles.titleContainer, styles.row]}>
          <SvgCssUri style={styles.universityLogo} uri={post.memberDto.universityMajorDto.university.logo} />
          <SplitColumn width={5} />
          <View>
            <Text style={styles.ninckname}>{post?.memberDto.nickname}</Text>
            <Text style={styles.createdAt}>{format(new Date(post?.memberDto.createdAt), 'MM/dd hh:mm')}</Text>
          </View>
        </View>

        <SplitRow height={20} />

        <View style={styles.mainContainer}>
          <View style={styles.contenContainer}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
          </View>

          <SplitRow height={15} />

          <View style={styles.row}>
            <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/like.png')} />
            <SplitColumn width={1} />
            <Text style={styles.interactionText}>{post.likeCount}</Text>
            <SplitColumn width={8} />
            <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
            <SplitColumn width={1} />
            <Text style={styles.interactionText}>{post.commentCount}</Text>
          </View>

          <SplitRow height={18} />

          <View>
            {post.comments.map(_comment => {
              return <Comment key={_comment.id} comment={_comment} />;
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <CommentInput placeholder="댓글을 입력하세요" value={comment} onChange={onChange} onPressEnter={onPressEnter} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 20,
  },
  universityLogo: {
    width: 36,
    height: 36,
  },
  ninckname: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  createdAt: {
    color: '#909090',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  contenContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FBFBFB',
    borderRadius: 10,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  title: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20,
  },
  content: {
    height: 50,
    color: '#363636',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  interactionIcon: {
    width: 18,
    height: 18,
  },
  interactionText: {
    color: '#8b8b8b',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
  inputContainer: {
    paddingHorizontal: 10,
  },
});