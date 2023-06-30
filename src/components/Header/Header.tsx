import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WriteButton } from '../Button';
import { SplitColumn, SplitRow } from '../SplitSpace';
import { Text } from '../Text';

type Props = {
  title: string;
  subTitle: string;
  isWritable?: boolean;
  onPressPrev?: () => void;
  onPressWrite?: () => void;
};

export const Header = ({ title, subTitle, isWritable = false, onPressPrev, onPressWrite }: Props) => {
  const navigation = useNavigation();

  const onPressPrevButton = () => {
    if (onPressPrev) {
      onPressPrev();
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.titleContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onPressPrevButton}>
            <Image resizeMode="cover" source={require('@/assets/images/prev.png')} />
          </TouchableOpacity>
          <SplitColumn width={5} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <SplitRow height={2} />
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      {isWritable && <WriteButton onPress={onPressWrite} />}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignSelf: 'flex-end',
  },
  title: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20,
  },
  subTitle: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '200',
    lineHeight: 15,
    paddingLeft: 27,
  },
});
