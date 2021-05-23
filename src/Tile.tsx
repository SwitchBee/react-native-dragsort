import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MARGIN, SIZE } from './Config';
const getRandomColor = () => {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')'
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZE - MARGIN,
    height: SIZE - MARGIN,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {
  return (
    <View
      style={[{ backgroundColor: getRandomColor() }, styles.container]}
      pointerEvents="none"
    >
      <Text style={{ color: 'white', fontSize: 42, fontWeight: 'bold' }}>
        {' '}
        {id}{' '}
      </Text>
    </View>
  );
};

export default Tile;
