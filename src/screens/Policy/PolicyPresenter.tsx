import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '@/components/Header';
import { SearchInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';
import { UniversityRow } from '@/components/University';
import { University } from '@/types/university';

type Props = {
  universities?: University[];
  onChange: (value: string) => void;
  onPressUniversity: (universityId: number, code: string) => void;
};

export const PolicyPresenter = ({ universities, onChange, onPressUniversity }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SplitRow height={top} />

      <Header title="제도/지원" subTitle="올빼미광장" />

      <SplitRow height={30} />

      <ScrollView style={styles.mainContainer}>
        <SearchInput placeholder="검색어를 입력해주세요." onChangeText={text => onChange(text)} />

        <SplitRow height={10} />

        {universities &&
          universities.map(university => {
            return (
              <React.Fragment key={university.name}>
                <TouchableOpacity
                  style={styles.universityContainer}
                  onPress={() => onPressUniversity(university.id, university.code)}
                >
                  <UniversityRow university={university} />
                </TouchableOpacity>
                <SplitRow height={10} />
              </React.Fragment>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 10,
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
  },
});
