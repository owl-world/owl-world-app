import React from 'react';
import { Dimensions, ImageSourcePropType, SafeAreaView, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { LabelButton } from '@/components/Button';
import { SearchInput } from '@/components/Input';
import { Menu } from '@/components/Menu';
import { PostRow } from '@/components/Post';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { TokenBody } from '@/types/auth';
import { Post } from '@/types/post';

const { height } = Dimensions.get('screen');

type MenuType = {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

type Props = {
  member?: TokenBody;
  posts?: Post[];
  menus: MenuType[];
  onPressPost: (postId: number) => void;
  onPressSignOut: () => void;
};

export const HomePresenter = ({ member, posts, menus, onPressPost, onPressSignOut }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullScreen}>
        <SplitRow height={height * 0.1} />

        <View style={styles.profileContainer}>
          <SvgCssUri style={styles.logo} uri={member?.universityLogo || null} />
          <SplitColumn width={7} />
          <View style={styles.proflieSuffixContainer}>
            <Text style={styles.nickname}>{member?.nickname}</Text>
            <SplitRow height={2} />
            <Text style={styles.department}>
              {member?.universityName} {member?.majorName}
            </Text>
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
              return (
                <TouchableWithoutFeedback key={post.id} onPress={() => onPressPost(post.id)}>
                  <PostRow post={post} />
                </TouchableWithoutFeedback>
              );
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
  logo: {
    width: 50,
    height: 50,
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
