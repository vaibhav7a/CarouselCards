import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  Animated,
} from 'react-native';

const CarouselCard = props => {
  const OFFSET = 0;
  const idx = props.rowIndex;
  const itemWidth = props.itemWidth;
  const inputRange = [
    (idx - 1) * itemWidth,
    idx * itemWidth,
    (idx + 1) * itemWidth,
  ];
  console.log('Input ' + inputRange);
  console.log(props.scrollX);

  const translate = props.scrollX.interpolate({
    inputRange,
    outputRange: [0.85, 1, 0.85],
  });

  console.log('adsd ' + translate[0]);


  const opacity = props.scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });
  return (
    <Animated.View
      style={{
        ...styles.container,
        ...{
          width: itemWidth,
          borderRadius: props.radius,
          opacity: opacity,
          transform: [{scaleY: translate}],
        },
      }}>
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
