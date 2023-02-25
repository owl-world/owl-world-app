import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { SubmitButton } from '@/components/Button';
import { Review } from '@/components/Review';
import { SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { TokenBody } from '@/types/auth';
import { Review as ReviewType } from '@/types/review';

type Props = {
  member?: TokenBody;
  reviews: ReviewType[];
  findRatingByReviewId: (reviewId: number) => number;
  onChange: (key: number, value: number) => void;
  onPressSubmit: () => void;
};

export const ReviewPresenter = ({ reviews, member, findRatingByReviewId, onChange, onPressSubmit }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SplitRow height={50} />

      <SvgCssUri style={styles.logo} uri={member?.universityLogo || null} />

      <SplitRow height={23} />

      <Text style={styles.nickname}>{member?.nickname}</Text>
      <Text style={styles.department}>
        {member?.universityName} {member?.majorName}
      </Text>

      <SplitRow height={20} />
      <Text style={styles.explanation}>우리 학교에 별점 리뷰를 달아주세요!{'\n'}예비 신입생들에게 참고가 됩니다.</Text>

      <SplitRow height={23} />

      {reviews.map((review, idx) => (
        <Review
          key={review.id}
          rating={findRatingByReviewId(idx)}
          review={review.question}
          onChange={rating => onChange(idx, rating)}
        />
      ))}

      <SplitRow height={40} />

      <SubmitButton style={styles.button} onPress={onPressSubmit}>
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
  logo: {
    width: 50,
    height: 50,
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
