import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchHeader } from '@/components/Header';
import { FreePostRowForSearch } from '@/components/Post/FreePostRowForSearch';
import { QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { Search } from '@/types/search';

type Props = {
  search: Search;
  searchValue: string;
  onPressPost: (type: string, universityId: number, universityName: string) => void;
};

export const SearchPresenter = ({ search, searchValue, onPressPost }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader title={searchValue} />
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <SplitRow height={30} />

        {search.articles.map(article => {
          if (article.type === 'question') {
            return (
              <QuestionRow
                key={article.id}
                question={article}
                isMember={!!article.member}
                onPress={() => onPressPost('question', article.id, article.universityDto.name)}
              />
            );
          } else if (article.type === 'post') {
            return (
              <React.Fragment key={article.id}>
                <FreePostRowForSearch
                  post={article}
                  onPress={() => onPressPost('post', article.id, article.member.universityMajorDto.name)}
                />
                <SplitRow height={20} />
              </React.Fragment>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
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
