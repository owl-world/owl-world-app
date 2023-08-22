import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Row } from '@/components/Grid';
import { Header } from '@/components/Header';
import { SearchInput } from '@/components/Input';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { UniversityRow } from '@/components/University';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { BookMark } from '@/types/review';
import { height } from '@/utils/globalStyles';

type Props = {
  bookmarks: BookMark[];
  onChange: (value: string) => void;
  onPressSearch: () => void;
  onPressUniversity: (universityId: number, code: string, avg: number) => void;
};

export const NonMemberHomePresenter = ({ bookmarks, onChange, onPressSearch, onPressUniversity }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container}>
      <SplitRow height={top} />

      <Header title=" " subTitle=" " />

      <View style={styles.fullScreen}>
        <SplitRow height={height * 60} />

        <View style={styles.profileContainer}>
          <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          <SplitColumn width={7} />
          <View style={styles.proflieSuffixContainer}>
            <Text style={styles.nickname}>{nonMemberNickname}</Text>
            <SplitRow height={2} />
            <Text style={styles.department}>{nonMemberNickname}님 환영합니다!</Text>
          </View>
        </View>

        <SplitRow height={44} />

        <SearchInput
          placeholder="검색어를 입력해주세요."
          onChangeText={text => onChange(text)}
          onPressSearch={onPressSearch}
        />

        <SplitRow height={37} />
      </View>

      <View style={styles.mainContainer}>
        <Row style={styles.label}>
          <Image style={styles.like} resizeMode="cover" source={require('@/assets/images/filled_heart.png')} />
          <SplitColumn width={4} />
          <Text style={styles.title}>즐겨찾는 학교</Text>
        </Row>

        <SplitRow height={10} />

        {bookmarks &&
          bookmarks.map((bookmark, idx) => {
            return (
              <React.Fragment key={idx}>
                <TouchableOpacity
                  style={styles.universityContainer}
                  onPress={() =>
                    onPressUniversity(bookmark.universityDto.id, bookmark.universityDto.code, bookmark.avg)
                  }
                >
                  <UniversityRow university={bookmark.universityDto} rating={bookmark.avg} />
                </TouchableOpacity>
                <SplitRow height={10} />
              </React.Fragment>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    paddingHorizontal: 26,
  },
  majorLogo: {
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
  profileContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
  },
  proflieSuffixContainer: {},
  mainContainer: {
    paddingHorizontal: 10,
  },
  label: {
    alignItems: 'center',
  },
  like: {
    width: 15,
    height: 15,
  },
  title: {
    color: '#141414',
    fontSize: 15,
    fontWeight: '400',
  },
  universityContainer: {
    backgroundColor: '#FBFBFB',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
});
