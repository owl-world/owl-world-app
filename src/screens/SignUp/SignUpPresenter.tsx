import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { LabelButton, SubmitButton } from '@/components/Button';
import { Container } from '@/components/Grid';
import { SafreAreaFlexView } from '@/components/Grid/SafreAreaFlexView';
import { SignInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';
import { SignUpEntity } from '@/types/member';
import { University, UniversityMajor } from '@/types/university';
import { height } from '@/utils/globalStyles';

type Props = {
  universities: University[];
  universityMajor: UniversityMajor[];
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

export const SignUpPresenter = ({
  universities,
  universityMajor,
  onChange,
  onPressSignUp,
  onPressSignIn,
  onPressNonMemberSignIn,
}: Props) => {
  return (
    <SafreAreaFlexView>
      <ScrollView>
        <SplitRow height={height * 80} />

        <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />

        <View>
          <FlatList
            keyExtractor={item => item.key}
            data={forms}
            ListHeaderComponent={<SplitRow height={30} />}
            ItemSeparatorComponent={Spacer}
            contentContainerStyle={styles.forms}
            scrollEnabled={false}
            renderItem={({ item }) => {
              if (item.key === 'university') {
                return (
                  <SelectDropdown
                    data={universities}
                    defaultButtonText={item.placeholder}
                    buttonStyle={styles.selectBox}
                    buttonTextStyle={styles.selectBoxText}
                    dropdownStyle={styles.selectBoxDropDown}
                    onSelect={selectedItem => {
                      onChange(item.key, selectedItem.code);
                    }}
                    buttonTextAfterSelection={selectedItem => selectedItem.name}
                    rowTextForSelection={rowItem => rowItem.name}
                  />
                );
              } else if (item.key === 'majorId') {
                return (
                  <SelectDropdown
                    data={universityMajor}
                    defaultButtonText={item.placeholder}
                    buttonStyle={styles.selectBox}
                    buttonTextStyle={styles.selectBoxText}
                    dropdownStyle={styles.selectBoxDropDown}
                    disabled={universityMajor.length === 0}
                    onSelect={selectedItem => {
                      onChange(item.key, selectedItem.id);
                    }}
                    buttonTextAfterSelection={selectedItem => selectedItem.name}
                    rowTextForSelection={rowItem => rowItem.name}
                  />
                );
              } else {
                return (
                  <SignInput
                    style={styles.input}
                    placeholder={item.placeholder}
                    secureTextEntry={item.key === 'password'}
                    onChangeText={text => onChange(item.key, text)}
                  />
                );
              }
            }}
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

        <SplitRow height={height * 80} />
      </ScrollView>
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
    height: height * 60,
  },
  selectBox: {
    width: '100%',
    height: height * 60,
    borderRadius: 10,
    paddingHorizontal: 0,
    backgroundColor: '#FFFDF7',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  selectBoxText: {
    color: '#7D7D7D',
    fontFamily: 'Pretendard-Medium',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'left',
  },
  selectBoxDropDown: {
    marginTop: 10,
    backgroundColor: '#FFFDF7',
    borderRadius: 10,
  },
});
