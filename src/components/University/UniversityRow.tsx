import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import { University } from '@/types/university';
import { Row } from '../Grid';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Stars } from '../Star/Stars';
import { Text } from '../Text';

type Props = {
  university: University;
  isDetail?: boolean;
  rating?: number;
  onPressQnA?: (universityId: number, universityName: string) => void;
};

export const UniversityRow = ({ university, rating, isDetail, onPressQnA }: Props) => {
  return (
    <React.Fragment>
      <Row>
        <SvgCssUri style={styles.logo} uri={university.logo} />
        <SplitColumn width={25} />
        <View style={styles.textContainer}>
          {isDetail && onPressQnA && (
            <TouchableOpacity style={styles.button} onPress={() => onPressQnA(university.id, university.name)}>
              <View>
                <Text style={styles.buttonText}>질문답변 게시판</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={styles.name}>{university.name}</Text>
          <SplitRow height={10} />
          <Row>
            <Text style={styles.rate}>종합평점</Text>
            <SplitColumn width={5} />
            <Stars rating={rating || 0} size={19} />
          </Row>
        </View>
      </Row>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 98,
    height: 98,
  },
  textContainer: {
    flex: 1,
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
    overflow: 'visible',
    alignSelf: 'flex-end',
    backgroundColor: '#FFF8D8',
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  buttonText: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '500',
  },
});
