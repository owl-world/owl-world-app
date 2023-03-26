import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { TokenBody } from '@/types/auth';
import { Question } from '@/types/qna';

type Props = {
  member?: TokenBody;
  universityName: string;
  questions?: Question[];
  onPressWrite: () => void;
  onPressQuestion: (questionId: number) => void;
};

export const QnAPresenter = ({ member, universityName, questions, onPressWrite, onPressQuestion }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle={universityName} isWritable={!!member} onPressWrite={onPressWrite} />

      <SplitRow height={30} />

      <ScrollView style={styles.fullScreen}>
        {questions &&
          questions.map(question => {
            return (
              <QuestionRow
                key={question.id}
                question={question}
                isMember={!!question.member}
                onPress={onPressQuestion}
              />
            );
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
