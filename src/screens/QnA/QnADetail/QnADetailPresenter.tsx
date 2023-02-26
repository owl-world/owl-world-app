import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { CommentInput } from '@/components/Input/CommentInput';
import { AnswerRow, QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { TokenBody } from '@/types/auth';
import { Question } from '@/types/qna';

type Props = {
  member?: TokenBody;
  question: Question;
  answer: string;
  onPressLike: (liked: boolean, answerId: number) => void;
  onChange: (value: string) => void;
  onPressAccept: (answerId: number) => void;
  onPressEnter: () => void;
};

export const QnADetailPresenter = ({
  member,
  question,
  answer,
  onPressLike,
  onPressAccept,
  onChange,
  onPressEnter,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle="인하대" />

      <SplitRow height={30} />

      <ScrollView style={styles.fullScreen}>
        <QuestionRow question={question} isMember={!!question.member} />

        <SplitRow height={30} />

        {question.answers.map(_answer => {
          return (
            <AnswerRow
              key={_answer.id}
              answer={_answer}
              isOwner={_answer.member.id === member?.memberId}
              onPressLike={onPressLike}
              onPressAccept={onPressAccept}
            />
          );
        })}
      </ScrollView>

      {member && (
        <View style={styles.inputContainer}>
          <CommentInput
            placeholder="예비 신입생이 답변을 기다리고 있어요!"
            value={answer}
            onChange={onChange}
            onPressEnter={onPressEnter}
          />
        </View>
      )}
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
  inputContainer: {
    paddingHorizontal: 10,
  },
});
