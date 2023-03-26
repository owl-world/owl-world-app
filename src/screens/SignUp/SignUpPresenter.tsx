import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LabelButton, SubmitButton } from '@/components/Button';
import { Container } from '@/components/Grid';
import { SafreAreaFlexView } from '@/components/Grid/SafreAreaFlexView';
import { SignInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';
import { SignUpEntity } from '@/types/member';

const { height } = Dimensions.get('screen');

type Props = {
  onChange: (key: keyof SignUpEntity, value: string) => void;
  onPressSignUp: () => void;
  onPressSignIn: () => void;
  onPressNonMemberSignIn: () => void;
};

type InputType = {
  key: keyof SignUpEntity;
  placeholder: string;
};

const forms: InputType[] = [
  { key: 'email', placeholder: '학교 이메일' },
  { key: 'password', placeholder: '비밀번호' },
  { key: 'university', placeholder: '학교' },
  { key: 'majorId', placeholder: '학과' },
  { key: 'nickname', placeholder: '닉네임' },
];

const Spacer = () => <SplitRow height={15} />;

export const SignUpPresenter = ({ onChange, onPressSignUp, onPressSignIn, onPressNonMemberSignIn }: Props) => {
  return (
    <SafreAreaFlexView>
      <SplitRow height={height * 0.1} />

      <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />

      <View>
        <FlatList
          keyExtractor={item => item.key}
          data={forms}
          ListHeaderComponent={<SplitRow height={30} />}
          ItemSeparatorComponent={Spacer}
          contentContainerStyle={styles.forms}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <SignInput
              style={styles.input}
              placeholder={item.placeholder}
              secureTextEntry={item.key === 'password'}
              onChangeText={text => onChange(item.key, text)}
            />
          )}
        />

        <Container paddingHorizontal={40}>
          <SubmitButton onPress={onPressSignUp}>회원가입</SubmitButton>
        </Container>
      </View>

      <SplitRow height={33} />

      <LabelButton color="#808080" onPress={onPressSignIn}>
        로그인페이지로 가기
      </LabelButton>
      <SplitRow height={10} />
      <LabelButton color="#808080" onPress={onPressNonMemberSignIn}>
        비회원 로그인
      </LabelButton>
    </SafreAreaFlexView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
  forms: {
    paddingHorizontal: 40,
    paddingBottom: 30,
  },
  input: {
    paddingVertical: 20,
  },
});
