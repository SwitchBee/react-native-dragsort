import React from 'react';

import { Grid, Tile } from '../../src/index';
import { Text, View } from 'react-native';

const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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

const App = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: 50,
          backgroundColor: 'white',
          paddingHorizontal: 8,
        }}
      >
        <Grid
          editing={true}
          onDragEnd={(positions) =>
            console.log(JSON.stringify(positions, null, 2))
          }
        >
          {[...tiles].map((tile, index) => (
            <Tile onLongPress={() => true} key={index} id={index.toString()}>
              <View
                style={{
                  backgroundColor: getRandomColor(),
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 40,
                }}
              >
                <Text
                  style={{ fontSize: 28, color: 'blue', fontWeight: 'bold' }}
                >
                  {' '}
                  {index}{' '}
                </Text>
              </View>
            </Tile>
          ))}
        </Grid>
      </View>
    </>
  );
};

export default App;
