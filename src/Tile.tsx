import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import { MARGIN, SIZE } from './Config';

const styles = StyleSheet.create({
  container: {
    width: SIZE - MARGIN,
    height: SIZE - MARGIN,
  },
});
interface TileProps {
  id: string;
  children: ReactElement;
  onLongPress: () => void;
}

const Tile = ({ children }: TileProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {children}
    </View>
  );
};

export default Tile;
