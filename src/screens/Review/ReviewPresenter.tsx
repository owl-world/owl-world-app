import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native';
import { SubmitButton } from '@/components/Button';
import { Review } from '@/components/Review';
import { SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';

const { height } = Dimensions.get('screen');

type Props = {};

const reviews = [
  { id: 1, review: '우리 학교 시설은 충분하다.' },
  { id: 2, review: '학과 내 분위기가 좋다.' },
  { id: 3, review: '커리큘럼이 잘 짜여있다.' },
  { id: 4, review: '학교에서 재직자를 배려해 다니는 것에 어려움이 없다.' },
  { id: 5, review: '수업과 과제의 난이도가 적당하다.' },
  { id: 6, review: '나는 우리 학교에 다니는 것이 자랑스럽다.' },
];

export const ReviewPresenter = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SplitRow height={50} />

      <Image resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />

      <SplitRow height={23} />

      <Text style={styles.nickname}>닉네임</Text>
      <Text style={styles.department}>인하대학교 메카트로닉스 공학과</Text>

      <SplitRow height={20} />
      <Text style={styles.explanation}>우리 학교에 별점 리뷰를 달아주세요!{'\n'}예비 신입생들에게 참고가 됩니다.</Text>

      <SplitRow height={23} />

      {reviews.map(review => (
        <Review review={review.review} />
      ))}

      <SplitRow height={40} />

      <SubmitButton style={styles.button} onPress={() => null}>
        확인
      </SubmitButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nickname: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  department: {
    color: '#4A4A4A',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
  explanation: {
    color: '#626262',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 13,
  },
  button: {
    backgroundColor: '#FFF8D8',
    paddingHorizontal: 33,
    shadowOpacity: 0.05,
  },
});
