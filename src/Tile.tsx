import React, { ReactElement, useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import { ConfigContext } from './ConfigContext';

interface TileProps {
  id: string;
  children: ReactElement;
  onLongPress: () => void;
  style?: ViewStyle;
}

const Tile = ({ children, style }: TileProps) => {
  const config = useContext(ConfigContext);
  const { SIZE, MARGIN } = config;
  const container = {
    width: SIZE - MARGIN,
    height: SIZE - MARGIN,
  };
  return (
    <View style={[style, container]} pointerEvents="none">
      {children}
    </View>
  );
};

export default Tile;
