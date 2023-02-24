import { format } from 'date-fns';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { Comment as CommentType } from '@/types/comment';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  comment: CommentType;
};

export const Comment = ({ comment }: Props) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.enter} resizeMode="cover" source={require('@/assets/images/enter.png')} />
          <SplitColumn width={4} />
          <SvgCssUri style={styles.logo} uri={comment.memberDto.universityMajorDto.university.logo} />
          <SplitColumn width={4} />
          <View>
            <Text style={styles.nickname}>{comment.memberDto.nickname}</Text>
            <Text style={styles.createdAt}>{format(new Date(comment.memberDto.createdAt), 'MM/dd hh:mm')}</Text>
          </View>
        </View>

        <SplitRow height={10} />

        <Text style={styles.content}>{comment.content}</Text>
      </View>
      <SplitRow height={11} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#FBFBFB',
    borderRadius: 10,
    paddingTop: 6,
    paddingBottom: 9,
    paddingHorizontal: 12,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  enter: {
    marginTop: 6,
  },
  logo: {
    width: 28,
    height: 28,
  },
  nickname: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  createdAt: {
    color: '#909090',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
  },
  content: {
    color: '#454545',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
});
