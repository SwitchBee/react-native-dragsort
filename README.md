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
yarn add react-native-drag-and-sort
```

### SortableContainer

The SortableContainer component needs to wrap all the components, it recieves only one optional prop which is the customconfig,
which lets you set the:

- Amount of columns
- Margin between each tile
- Size of each tile

The default config is the following

```js
  MARGIN: 8,
  COL: 4,
  SIZE: screenWidth / 4 - 8,
```

To set custom sizes:

```js
<SortableContainer customconfig={{ COL: 3, MARGIN: 40, SIZE: 200 }}>
  // .....
</SortableContainer>
```

### SortableGrid

The SortableGrid receives three props:

- Children : react nodes
- Editing : boolean if the components can be dragged or not
- onDragEnd: callback function when dragging is over

```js
<SortableGrid
  editing={true}
  onDragEnd={(positions) => console.log(JSON.stringify(positions))}
>
  // ........
</SortableGrid>
```

### SortableTile

The sortable tile gets 2 props and one optional prop

- onLongPress: callback function for long press on tile
- index: index representing tile (as string)
- style: this prop is optional the default style is the following:

```js
const container = {
  width: SIZE - MARGIN,
  height: SIZE - MARGIN,
};
```

and can be overridden by passing in a value to the style prop.

Example

```js
<SortableTile onLongPress={() => true} key={index} id={index.toString()}>
  // ....
</SortableTile>
```

## Full Example

The following code is available in the example folder and can be run.

To run the example:

1. Fork and clone project
2. `cd example && yarn`
3. `expo start`

```js
import React from 'react';
import {
  Grid,
  Tile,
  Container as SortContainer,
} from 'react-native-drag-and-sort';
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
