import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchHeader } from '@/components/Header';
import { FreePostRowTest } from '@/components/Post/FreePostRowTest';
import { QuestionRow } from '@/components/Question';
import { SplitRow } from '@/components/SplitSpace';
import { Search } from '@/types/search';

type Props = {
  search: Search;
  searchValue: string;
  onPressPost: (type: 'post' | 'question', universityId: number, universityName: string) => void;
};

const Spacer = () => <SplitRow height={6} />;

export const SearchPresenter = ({ search, searchValue, onPressPost }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader title={searchValue} />
      <SplitRow height={30} />

      <ScrollView style={styles.mainContainer}>
        {search.articles.map(article => {
          if (article.type === 'question') {
            return <QuestionRow key={article.id} question={article} isMember={!!article.member} />;
          } else if (article.type === 'post') {
            return (
              <React.Fragment key={article.id}>
                <FreePostRowTest post={article} onPress={() => onPressPost(article.type)} />
                <SplitRow height={10} />
              </React.Fragment>
            );
          }
        })}
      </ScrollView>

      {/* <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.mainContainer}
        data={search.posts.posts}
        ListHeaderComponent={<SplitRow height={30} />}
        ItemSeparatorComponent={Spacer}
        renderItem={({ item }) => <SearchRow type="post" post={item} onPress={() => null} />}
      />

      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.mainContainer}
        data={search.questions.questions}
        ListHeaderComponent={<SplitRow height={30} />}
        ItemSeparatorComponent={Spacer}
        renderItem={({ item }) => <SearchRow type="question" post={item} onPress={() => null} />}
      /> */}
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
