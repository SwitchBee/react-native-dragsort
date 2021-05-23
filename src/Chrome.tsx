import React from 'react';

import { MARGIN } from './Config';
import Tile from './Tile';
import SortableList from './SortableList';
import { View } from 'react-native';

const tiles = [
  {
    id: '1',
    uri: 'https://google.com',
  },

  {
    id: '2',
    uri: 'https://expo.io',
  },
  {
    id: '3',
    uri: 'https://facebook.com',
  },
  {
    id: '4',
    uri: 'https://docs.swmansion.com/react-native-reanimated/',
  },
  {
    id: '5',
    uri: 'https://github.com',
  },
  {
    id: '6',
    uri: 'https://reactnavigation.org/',
  },
  {
    id: '7',
    uri: 'https://youtube.com',
  },
  {
    id: '8',
    uri: 'https://twitter.com',
  },
];

const Chrome = () => {
  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: MARGIN }}
      >
        <SortableList
          editing={true}
          onDragEnd={(positions) =>
            console.log(JSON.stringify(positions, null, 2))
          }
        >
          {[...tiles].map((tile, index) => (
            <Tile
              onLongPress={() => true}
              key={index}
              id={tile.id}
              uri={tile.uri}
            />
          ))}
        </SortableList>
      </View>
    </>
  );
};

export default Chrome;
