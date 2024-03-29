import { format } from 'date-fns';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { Answer } from '@/types/qna';
import { Row } from '../Grid';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  answer: Answer;
  isOwner: boolean;
  onPressLike: (liked: boolean, answerId: number) => void;
  onPressAccept: (answerId: number) => void;
};

export const AnswerRow = ({ answer, isOwner, onPressLike, onPressAccept }: Props) => {
  return (
    <View>
      <Row style={styles.spaceBetween}>
        <Row>
          {answer.member.universityMajorDto ? (
            <SvgCssUri style={styles.logo} uri={answer.member.universityMajorDto.university.logo} />
          ) : (
            <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          )}

          <SplitColumn width={4} />
          <View>
            <Row>
              <Text style={styles.question}>Answer</Text>
              <SplitColumn width={10} />
              <Text style={styles.createdAt}>{format(new Date(answer.createdAt), 'MM/dd hh:mm')}</Text>
            </Row>
            <Text style={styles.nickname}>{answer.member.nickname || '닉네임'}</Text>
          </View>
        </Row>

        <Row style={styles.heartContainer}>
          <Pressable onPress={() => onPressLike(answer.liked, answer.id)}>
            {answer.liked ? (
              <Image style={styles.like} resizeMode="cover" source={require('@/assets/images/filled_heart.png')} />
            ) : (
              <Image style={styles.like} resizeMode="cover" source={require('@/assets/images/heart.png')} />
            )}
          </Pressable>
          <SplitColumn width={2} />
          <Text style={styles.likeText}>{answer.likeCount}</Text>
        </Row>
      </Row>

      <SplitRow height={9} />

      <Row style={styles.contentContainer}>
        <Text style={styles.content}>{answer.content}</Text>

        {/* <TouchableOpacity
          style={answer.accepted ? styles.acceptedButton : styles.acceptButton}
          onPress={() => onPressAccept(answer.id)}
        >
          <Text>채택</Text>
        </TouchableOpacity> */}
      </Row>

      <SplitRow height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#FBFBFB',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
  content: {
    flex: 1,
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
  acceptButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFE05C',
    borderRadius: 7,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  acceptedButton: {
    backgroundColor: '#FFE05C',
    borderRadius: 7,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  acceptText: {
    color: '000000',
    fontSize: 11,
    lineHeight: 20,
    fontWeight: '500',
  },
});
