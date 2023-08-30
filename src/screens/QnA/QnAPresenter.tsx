import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { Question } from '@/types/qna';

type Props = {
  universityName: string;
  questions?: Question[];
  onPressWrite: () => void;
  onPressQuestion: (questionId: number) => void;
};

export const QnAPresenter = ({ universityName, questions, onPressWrite, onPressQuestion }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle={universityName} isWritable={true} onPressWrite={onPressWrite} />

      <SplitRow height={30} />

      <FlatList
        contentContainerStyle={styles.fullScreen}
        data={questions}
        renderItem={({ item }) => (
          <QuestionRow key={item.id} question={item} isMember={!!item.member} onPress={onPressQuestion} />
        )}
      />
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
