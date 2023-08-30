import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Flex } from '@/components/Grid';
import { SafreAreaFlexView } from '@/components/Grid/SafreAreaFlexView';
import { Header } from '@/components/Header';
import { FreePostRow } from '@/components/Post';
import { SplitRow } from '@/components/SplitSpace';
import { Post } from '@/types/post';
import { height } from '@/utils/globalStyles';

type Props = {
  posts?: Post[];
  onPressPost: (postId: number) => void;
  onPressWrite: () => void;
};

const Spacer = () => <SplitRow height={6} />;

export const FreePostPresenter = ({ posts, onPressPost, onPressWrite }: Props) => {
  return (
    <SafreAreaFlexView>
      <Header title="자유게시판" subTitle="올빼미광장" isWritable onPressWrite={onPressWrite} />
      <Flex>
        <FlatList
          data={posts}
          contentContainerStyle={styles.postContentContainer}
          ListHeaderComponent={<SplitRow height={height * 30} />}
          ItemSeparatorComponent={Spacer}
          renderItem={({ item }) => <FreePostRow key={item.id} post={item} onPress={onPressPost} />}
        />
      </Flex>
    </SafreAreaFlexView>
  );
};

const styles = StyleSheet.create({
  postContentContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
