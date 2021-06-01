import { ConfigContext } from './ConfigContext';
import React, { ReactElement, useState } from 'react';
import { Dimensions } from 'react-native';
import { getOrder, getPosition } from './ConfigContext';
export interface Positions {
  [id: string]: number;
}
interface SortableContainerProps {
  children: ReactElement;
  customconfig?: { MARGIN: number; COL: number; SIZE: number };
}
export default function SortableContainer({
  children,
  customconfig,
}: SortableContainerProps) {
  const { width } = Dimensions.get('window');

  const [config] = useState({
    MARGIN: 8,
    COL: 4,
    SIZE: width / 4 - 8,
    getPosition,
    getOrder,
  });
  const joint = { ...customconfig, getPosition, getOrder } as typeof config;
  return (
    <ConfigContext.Provider value={!customconfig ? joint : config}>
      {children}
    </ConfigContext.Provider>
  );
}
