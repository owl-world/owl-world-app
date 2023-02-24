import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { FreePostRow } from '@/components/Post';
import { SplitRow } from '@/components/SplitSpace';
import { Post } from '@/types/post';

type Props = {
  posts?: Post[];
  onPressPost: (postId: number) => void;
  onPressWrite: () => void;
};

const Spacer = () => <SplitRow height={6} />;

export const FreePostPresenter = ({ posts, onPressPost, onPressWrite }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="자유게시판" subTitle="올빼미광장" isWritable onPressWrite={onPressWrite} />
      <View style={styles.fullScreen}>
        <FlatList
          data={posts}
          ListHeaderComponent={<SplitRow height={30} />}
          ItemSeparatorComponent={Spacer}
          renderItem={({ item }) => <FreePostRow key={item.id} post={item} onPress={onPressPost} />}
        />
      </View>
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
