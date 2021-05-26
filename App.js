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
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import CarouselCard from './Components/CarouselCard';
import MealsItem from './Components/MealsItem';

const ITEM_WIDTH = Dimensions.get('window').width - 80;
const ITEM_SPACING = 15;
const SNAP_TO_INTEVAL = ITEM_WIDTH + ITEM_SPACING; //offset half

const App: () => Node = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Text
          style={{
            ...styles.herderText,
            ...{
              paddingLeft: 10,
            },
          }}>
          Category
        </Text>
        <FlatList
          decelerationRate={'normal'}
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
          renderItem={({item, index}) => {
            return (
              <CarouselCard
                data={item}
                itemWidth={ITEM_WIDTH}
                radius={8}
                rowIndex={index}
                scrollX={scrollX}
                totalItem={CATEGORIES}
              />
            );
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
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={12}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.herderText}>Meals</Text>
        <FlatList
          data={CATEGORIES}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item, index}) => {
            return <MealsItem data={item} itemIndex={index}/>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignContent: 'center',
  },
  carouselContainer: {
    height: 300,
    width: '100%',
    top: 40,
    //marginLeft: 15,
    marginBottom: 50,
    //flex: 1,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  herderText: {
    textAlign: 'left',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
