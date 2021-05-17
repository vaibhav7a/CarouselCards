/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {CATEGORIES} from './Data/DummyData';
import {StyleSheet, View, Text, FlatList, Dimensions,Animated} from 'react-native';
import CarouselCard from './Components/CarouselCard';


const ITEM_WIDTH = Dimensions.get('window').width - 80;
const ITEM_SPACING = 15;
const SNAP_TO_INTEVAL =  ITEM_WIDTH + ITEM_SPACING;

const App: () => Node = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Text style={styles.herderText}>Today</Text>
        <FlatList
          decelerationRate={'normal'}
          snapToAlignment={'center'}
          pagingEnabled={true}
          snapToInterval={SNAP_TO_INTEVAL}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          disableIntervalMomentum
          horizontal={true}
          data={CATEGORIES}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={(dataItem, index) => {
            console.log('idx: ' + index);
            return <CarouselCard data={dataItem.item} itemWidth={ITEM_WIDTH} radius={8}/>;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: ITEM_SPACING,
                }}
              />
            );
          }}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          //   { useNativeDriver: false }
          // )}
          //scrollEventThrottle={12}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  carouselContainer: {
    height: 300,
    width: '100%',
    position: 'absolute',
    top: 40,
    marginLeft: 15,
  },
  herderText: {
    textAlign: 'left',
    fontSize: 30,
    marginBottom: 10,
  },

});

export default App;
