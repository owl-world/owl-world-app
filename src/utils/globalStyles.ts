import { Dimensions } from 'react-native';

export const basicDimensions = {
  height: 844,
  width: 390,
};

export const height: number = // 높이 변환 작업
  Number((Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2));

export const width = // 가로 변환 작업
  Number((Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2));
