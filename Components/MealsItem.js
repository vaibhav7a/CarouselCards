import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';

const MealsItem = props => {
  const handleRef = useRef();
  const [scaleValue, setScaleValue] = useState(new Animated.Value(0));
  const translateX = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [props.itemIndex * 250, 1]
  });
  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      tension: 20,
      duration: 100,
      delay: props.itemIndex * 250,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Animatable.View
        style={{
          ...styles.itemContainer,
          ...{backgroundColor: props.data.color, opacity: scaleValue},
        }}>
        <Text style={styles.title}>{props.data.title}</Text>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 8,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  itemContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
export default MealsItem;
