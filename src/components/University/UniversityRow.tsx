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
  isDetail?: boolean;
};

export const UniversityRow = ({ university, isDetail }: Props) => {
  return (
    <React.Fragment>
      <View style={[styles.row]}>
        <SvgCssUri style={styles.logo} uri={university.logo} />
        <SplitColumn width={25} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{university.name}</Text>
          <SplitRow height={10} />
          <View style={styles.row}>
            <Text style={styles.rate}>종합평점</Text>
            <SplitColumn width={5} />
            <Stars rating={5} size={19} />
          </View>
        </View>
        {isDetail && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>질문답변 게시판</Text>
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
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
  button: {
    left: -40,
    top: -10,
    backgroundColor: '#FFF8D8',
    paddingVertical: 12,
    paddingHorizontal: 11,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '500',
  },
});
