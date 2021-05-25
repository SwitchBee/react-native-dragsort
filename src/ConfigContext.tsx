import { createContext } from 'react';
import { Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export const ConfigContext = createContext({
  MARGIN: 8,
  COL: 4,
  SIZE: width / 4 / 4 - 8,
});
