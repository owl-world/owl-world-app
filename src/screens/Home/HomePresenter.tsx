import React from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { LabelButton } from '@/components/Button';
import { Container } from '@/components/Grid';
import { SearchInput } from '@/components/Input';
import { Menu } from '@/components/Menu';
import { PostRow } from '@/components/Post';
import { Profile } from '@/components/Profile';
import { SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { TokenBody } from '@/types/auth';
import { Post } from '@/types/post';
import { height } from '@/utils/globalStyles';

// const { height } = Dimensions.get('screen');

type MenuType = {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

type Props = {
  member?: TokenBody;
  posts?: Post[];
  menus: MenuType[];
  onChnage: (value: string) => void;
  onPressSearch: () => void;
  onPressPost: (postId: number) => void;
  onPressSignOut: () => void;
};

export const HomePresenter = ({
  member,
  posts,
  menus,
  onChnage,
  onPressSearch,
  onPressPost,
  onPressSignOut,
}: Props) => {
  return (
    <ScrollView>
      <Container paddingHorizontal={20}>
        <SplitRow height={height * 127} />

        {member && <Profile member={member} />}

        <SplitRow height={height * 44} />

        <SearchInput
          placeholder="검색어를 입력해주세요."
          onChangeText={text => onChnage(text)}
          onPressSearch={onPressSearch}
        />

        <SplitRow height={height * 39} />

        <View style={styles.postContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={posts}
            scrollEnabled={false}
            ListHeaderComponent={<Text style={styles.postTitle}>인기게시물</Text>}
            ListHeaderComponentStyle={styles.postHeader}
            ListFooterComponent={<SplitRow height={13} />}
            renderItem={({ item }) => <PostRow post={item} onPress={onPressPost} />}
          />
        </View>

        <SplitRow height={height * 44} />

        <Container paddingHorizontal={25}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.menuContainer}
            data={menus}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Menu key={item.title} title={item.title} source={item.source} onPress={item.onPress} />
            )}
          />
        </Container>

        <SplitRow height={height * 60} />

        <LabelButton color="#8F8F8F" onPress={onPressSignOut}>
          로그아웃
        </LabelButton>

        <SplitRow height={height * 60} />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFFDF8',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  postHeader: {
    paddingBottom: 5,
  },
  postTitle: {
    color: '#161616',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
