import { format } from 'date-fns';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { Question } from '@/types/qna';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  question: Question;
  isMember: boolean;
  onPress?: (questionId: number) => void;
};

export const QuestionRow = ({ question, isMember, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.row}>
          {isMember ? (
            <SvgCssUri style={styles.logo} uri={question.member.universityMajorDto.university.logo} />
          ) : (
            <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          )}

          <SplitColumn width={4} />
          <View>
            <View style={styles.row}>
              <Text style={styles.question}>Question</Text>
              <SplitColumn width={10} />
              <Text style={styles.createdAt}>{format(new Date(question.createdAt), 'MM/dd hh:mm')}</Text>
            </View>
            <Text style={styles.nickname}>{isMember ? question.member.nickname : nonMemberNickname}</Text>
          </View>
        </View>
      </View>

      <SplitRow height={9} />

      {onPress ? (
        <TouchableOpacity style={styles.contentContainer} onPress={() => onPress(question.id)}>
          <Text style={styles.content}>{question.content}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{question.content}</Text>
        </View>
      )}

      <SplitRow height={9} />

      <View style={[styles.footerContainer, styles.row]}>
        <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
        <SplitColumn width={2} />
        <Text style={styles.interactionText}>{question.answerCount}</Text>
      </View>
    </View>
  );
};

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
    color: '#363636',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },
  footerContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    paddingRight: 10,
  },
  interactionIcon: {
    width: 13,
    height: 13,
  },
  interactionText: {
    color: '#909090',
    fontSize: 9,
    fontWeight: '500',
    lineHeight: 13,
  },
});
