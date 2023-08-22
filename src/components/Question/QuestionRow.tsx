import { format } from 'date-fns';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { Question } from '@/types/qna';
import { Row } from '../Grid';
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
      <Row style={styles.spaceBetween}>
        <Row>
          {isMember ? (
            <SvgCssUri style={styles.logo} uri={question.member.universityMajorDto.university.logo || null} />
          ) : (
            <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          )}

          <SplitColumn width={4} />
          <View>
            <Row>
              <Text style={styles.question}>Question</Text>
              <SplitColumn width={10} />
              <Text style={styles.createdAt}>{format(new Date(question.createdAt), 'MM/dd hh:mm')}</Text>
            </Row>
            <Text style={styles.nickname}>{isMember ? question.member.nickname : nonMemberNickname}</Text>
          </View>
        </Row>
      </Row>

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

      <Row style={styles.footerContainer}>
        <Image style={styles.interactionIcon} resizeMode="cover" source={require('@/assets/images/comment.png')} />
        <SplitColumn width={2} />
        <Text style={styles.interactionText}>{question.answerCount}</Text>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
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
    elevation: 1.5,
  },
  content: {
    color: '#363636',
    fontSize: 12,
    fontWeight: '500',
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
