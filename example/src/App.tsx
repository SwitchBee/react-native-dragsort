import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import DragSort from 'react-native-dragsort';

export default function App() {
  return <DragSort.Grid />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
