import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Animated,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Button,
  ImageBackground,
} from 'react-native';
import {IMAGE} from './components/src/constants/image';

const listCards = [
  {
    text: ['Vịnh Hạ Long', 'Vịnh Hạ Long', 'Vịnh Hạ Long'],
    title: 'Hải Phòng Việt Nam',
    image: IMAGE.IMG_HALONG,
    review: ['http://192.168.1.8:81/img/haNoi.jpg'],
    price: '20.000.000 vnd',
  },
];
export default class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center">
          {listCards.review.map((img, index) => (
            <Image
              key={`${index}-${img}`}
              source={{uri: img}}
              resizeMode="cover"
              style={{width, height: 250}}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
