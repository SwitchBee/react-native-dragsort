# react-native-dragsort

The is a component for react native which lets you sort a grid and sort other grids by dragging
items. Built with fast and smooth animations using react native reanimated 2. Works on android, ios and web.

| Platform | Supported |
| -------- | --------- |
| android  | ✔️        |
| ios      | ✔️        |
| web      | ✔️        |

## Usage

## Installation

```sh
yarn add react-native-dragsort
```

## Example

This code is availble in the example folder.

```js
import React from 'react';
import { Grid, Tile } from 'react-native-dragsort';
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
```

## Results

### Android

![](https://i.imgur.com/ofl5LAk.gif)

### IOS

![](https://i.imgur.com/133QU94.gif)

### Web

![](https://i.imgur.com/2UMKQR5.gif)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
