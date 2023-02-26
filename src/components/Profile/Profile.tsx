import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { TokenBody } from '@/types/auth';
import { Row } from '../Grid';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  member: TokenBody;
};

export const Profile = ({ member }: Props) => (
  <Row>
    <SvgCssUri style={styles.logo} uri={member.universityLogo} />

    <SplitColumn width={7} />

    <View>
      <Text style={styles.nickname}>{member.nickname}</Text>
      <SplitRow height={2} />
      <Text style={styles.department}>
        {member.universityName} {member.majorName}
      </Text>
    </View>
  </Row>
);

const styles = StyleSheet.create({
  logo: {
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
});
