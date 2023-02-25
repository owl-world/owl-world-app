import React from 'react';
import { StyleSheet, View } from 'react-native';
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
  onPressUniversity: (universityId: number) => void;
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
            return <UniversityRow key={university.name} university={university} onPress={onPressUniversity} />;
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
});
