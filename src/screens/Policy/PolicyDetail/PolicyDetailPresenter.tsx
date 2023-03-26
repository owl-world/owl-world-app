import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/Header';
import { Label } from '@/components/Label';
import { Review } from '@/components/Review';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { UniversityRow } from '@/components/University';
import { Review as ReviewType, Score } from '@/types/review';
import { UniversityMajor } from '@/types/university';

type Props = {
  universityMajor: UniversityMajor[];
  reviews?: ReviewType[];
  scores?: Score;
  avg: number;
  onPressQnA: (universityId: number, universityName: string) => void;
};

export const PolicyDetailPresenter = ({ universityMajor, reviews, scores, avg, onPressQnA }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="제도/지원" subTitle="올빼미광장" />

      <SplitRow height={20} />

      <View style={styles.fullScreen}>
        <View style={styles.mainContainer}>
          <ScrollView style={styles.mainScrollContainer} showsVerticalScrollIndicator={true}>
            <SplitRow height={25} />

            <UniversityRow university={universityMajor[0].university} isDetail onPressQnA={onPressQnA} rating={avg} />

            <SplitRow height={25} />

            <Label>2022년도</Label>

            <SplitRow height={7} />

            {/* 전형명 */}
            <Text style={styles.content}>
              전형명 |
              <SplitColumn width={10} />
              <Text>{universityMajor[0].type}</Text>
            </Text>

            <SplitRow height={7} />

            {/* 학과 */}
            <View style={styles.row}>
              <Text style={styles.content}>힉과 |</Text>
              <SplitColumn width={10} />
              <View>
                {universityMajor.map(major => {
                  return (
                    <Text key={major.id} style={styles.content}>
                      {major.name}
                    </Text>
                  );
                })}
              </View>
            </View>

            <SplitRow height={7} />

            {/* 모집정원 */}
            <View style={styles.row}>
              <Text style={styles.content}>모집정원 |</Text>
              <SplitColumn width={10} />
              <View>
                {universityMajor.map(major => {
                  return (
                    <Text key={major.id} style={styles.content}>
                      {major.name} {major.total}명
                    </Text>
                  );
                })}
              </View>
            </View>

            <SplitRow height={7} />

            {/* 경쟁률 */}
            <View style={styles.row}>
              <Text style={styles.content}>경쟁률 |</Text>
              <SplitColumn width={10} />
              <View>
                {universityMajor.map(major => {
                  return (
                    <Text key={major.id} style={styles.content}>
                      {major.name} {major.competitive} : 1
                    </Text>
                  );
                })}
              </View>
            </View>

            <SplitRow height={30} />

            <Label>재학생 리뷰</Label>

            <SplitRow height={18} />

            {reviews &&
              reviews.map((review, idx) => (
                <Review
                  key={review.id}
                  size={21}
                  rating={scores ? scores.totalScores[idx] : 0}
                  review={review.question}
                />
              ))}
          </ScrollView>
        </View>
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
    paddingHorizontal: 10,
  },
  mainContainer: {
    backgroundColor: '#FBFBFB',
    paddingVertical: 5,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  mainScrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 98,
    height: 98,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  rate: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
  },
  content: {
    color: '#3D3D3D',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
  },
});
