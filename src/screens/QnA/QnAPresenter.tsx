import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { Question } from '@/types/qna';

const { height } = Dimensions.get('screen');

type Props = {
  questions?: Question[];
  onPressQuestion: (questionId: number) => void;
};

export const QnAPresenter = ({ questions, onPressQuestion }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle="인하대" />

      <SplitRow height={30} />

      <ScrollView style={styles.fullScreen}>
        {questions &&
          questions.map(question => {
            return <QuestionRow key={question.id} question={question} onPress={onPressQuestion} />;
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
