import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgCssUri } from 'react-native-svg';
import { SubmitButton } from '@/components/Button';
import { Label } from '@/components/Label';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { University } from '@/types/university';
import { replaceUniversityName } from '@/utils/university';

const { width } = Dimensions.get('screen');

type Props = {
  universities?: University[];
  likes: number[];
  onPressLike: (universityId: number) => void;
  onPressConfirm: () => void;
};

export const nonMemberNickname = '아기올뺴미17';

export const BookMarkPresenter = ({ universities, likes, onPressLike, onPressConfirm }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SplitRow height={top} />
      <ScrollView>
        <SplitRow height={50} />

        <View style={styles.nicknameContainer}>
          <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/mascot.png')} />
          <Label containerStyle={styles.label} textStyle={styles.labelText}>
            {nonMemberNickname}
          </Label>
        </View>

        <SplitRow height={37} />

        <Text style={styles.explanationText}>
          아기올빼미 모드는 학교 인증 전{'\n'}정보 수집에 최적화된 모드입니다{'\n'}질문과 학교 리뷰 등을 볼 수 있습니다
        </Text>

        <SplitRow height={40} />

        <Text style={styles.titleText}>관심있는 대학교를 선택해주세요.</Text>

        <SplitRow height={50} />

        <View style={styles.universityContainer}>
          {universities &&
            universities.map(university => {
              return (
                <View key={university.id}>
                  <SvgCssUri width={70} height={70} style={styles.universityLogo} uri={university.logo} />
                  <SplitRow height={13} />
                  <View style={styles.row}>
                    <TouchableOpacity onPress={() => onPressLike(university.id)}>
                      {likes.includes(university.id) ? (
                        <Image
                          style={styles.like}
                          resizeMode="cover"
                          source={require('@/assets/images/filled_heart.png')}
                        />
                      ) : (
                        <Image style={styles.like} resizeMode="cover" source={require('@/assets/images/heart.png')} />
                      )}
                    </TouchableOpacity>
                    <SplitColumn width={2} />
                    <Text style={styles.universityName}>{replaceUniversityName(university.name)}</Text>
                  </View>
                </View>
              );
            })}
        </View>
        <SplitRow height={70} />
      </ScrollView>

      <SubmitButton style={styles.button} onPress={onPressConfirm}>
        확인
      </SubmitButton>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    bottom: -4,
    zIndex: 2,
  },
  nicknameContainer: {
    alignItems: 'center',
  },
  label: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  labelText: {
    color: '#4E4E4E',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
  explanationText: {
    color: '#979797',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'center',
  },
  titleText: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
  },
  universityLogo: {
    width: 70,
    height: 70,
  },
  universityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 35,
    gap: width * 0.12,
  },
  universityName: {
    left: -5,
    color: '#141414',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'center',
  },
  like: {
    left: -5,
    width: 15,
    height: 15,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 20,
  },
});
