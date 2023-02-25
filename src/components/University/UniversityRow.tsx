import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { University } from '@/types/university';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Stars } from '../Star/Stars';
import { Text } from '../Text';

type Props = {
  university: University;
  onPress: (universityId: number) => void;
};

export const UniversityRow = ({ university, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(university.id)}>
      <View style={[styles.container, styles.row]}>
        <SvgCssUri style={styles.logo} uri={university.logo} />
        <SplitColumn width={25} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{university.name}</Text>
          <SplitRow height={10} />
          <View style={styles.row}>
            <Text style={styles.rate}>종합평점</Text>
            <SplitColumn width={5} />
            <Stars rating={5} size={16} />
          </View>
        </View>
      </View>

      <SplitRow height={10} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#FBFBFB',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  logo: {
    width: 98,
    height: 98,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  rate: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
  },
});
