import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  Animated,
} from 'react-native';

// const inputRange = [
//     (idx - 1) * ITEM_WIDTH,
//     idx * ITEM_WIDTH,
//     (idx + 1) * ITEM_WIDTH,
//   ]

//   const translate = scrollX.interpolate({
//     inputRange,
//     outputRange: [0.85, 1, 0.85],
//   })

//   const opacity = scrollX.interpolate({
//     inputRange,
//     outputRange: [0.5, 1, 0.5],
//   })

const CarouselCard = props => {
  return (
    <Animated.View style={{...styles.container, ...{width: props.itemWidth, borderRadius: props.radius}}}>
      <ImageBackground
        style={{
          ...styles.backgroudImage,
          ...{backgroundColor: props.data.color},
        }}
        source={props.data.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.categoryTitle}>{props.data.title}</Text>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'red',
    overflow: 'hidden',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#0000',
  },
  backgroudImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.8,
  },
  categoryTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    padding: 15,
  },
});
export default CarouselCard;
