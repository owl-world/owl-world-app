import React from 'react';
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, View } from 'react-native';
import { LabelButton } from '@/components/Button';
import { SearchInput } from '@/components/Input';
import { Menu } from '@/components/Menu';
import { PostRow } from '@/components/Post';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { Post } from '@/types/post';

const { height } = Dimensions.get('screen');

type MenuType = {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

type Props = {
  posts?: Post[];
  menus: MenuType[];
  onPressSignOut: () => void;
};

export const HomePresenter = ({ posts, menus, onPressSignOut }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullScreen}>
        <SplitRow height={height * 0.1} />

        <View style={styles.profileContainer}>
          <Image style={styles.majorLogo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />
          <SplitColumn width={7} />
          <View style={styles.proflieSuffixContainer}>
            <Text style={styles.nickname}>닉네임</Text>
            <Text style={styles.department}>인하대학교 메카트로닉스공학과</Text>
          </View>
        </View>

        <SplitRow height={44} />

        <SearchInput placeholder="검색어를 입력해주세요." />

        <SplitRow height={37} />

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>인기게시물</Text>

          <SplitRow height={5} />

          {posts &&
            posts.map(post => {
              return <PostRow post={post} key={post.id} />;
            })}

          <SplitRow height={13} />
        </View>

        <SplitRow height={44} />

        <View style={styles.menuContainer}>
          {menus.map(menu => (
            <Menu key={menu.title} title={menu.title} source={menu.source} onPress={menu.onPress} />
          ))}
        </View>

        <SplitRow height={60} />

        <LabelButton color="#8F8F8F" onPress={onPressSignOut}>
          로그아웃
        </LabelButton>
      </View>
    </SafeAreaView>
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
  proflieSuffixContainer: {},
  postContainer: {
    backgroundColor: '#FFFDF8',
    paddingVertical: 15,
    paddingHorizontal: 26,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
