import React from 'react';

import { SortableContainer, SortableGrid, SortableTile } from '../../src/index';
import { StyleSheet, Text, View } from 'react-native';

const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <SortableContainer customconfig={{ COL: 3, MARGIN: 40, SIZE: 200 }}>
          <SortableGrid
            editing={true}
            onDragEnd={(positions) =>
              console.log(JSON.stringify(positions, null, 2))
            }
          >
            {[...tiles].map((tile, index) => (
              <SortableTile
                onLongPress={() => true}
                key={index}
                id={index.toString()}
              >
                <View style={styles.tile}>
                  <Text style={styles.text}>{index}</Text>
                </View>
              </SortableTile>
            ))}
          </SortableGrid>
        </SortableContainer>
      </View>
    </>
  );
};
const getRandomColor = () => {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256 + 50) +
    ',' +
    Math.floor(Math.random() * 256 + 50) +
    ',' +
    Math.floor(Math.random() * 256 + 50) +
    ')'
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  tile: {
    backgroundColor: getRandomColor(),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  text: {
    fontSize: 28,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
