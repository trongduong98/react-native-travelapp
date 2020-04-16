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

const listCardsAll = [
  {
    text: 'Vịnh Hạ Long',
    title: 'Hải Phòng Việt Nam',
    image_banner: IMAGE.IMG_HALONG,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '20.000.000 vnd',
  },
  {
    text: 'Ruộng Bậc Thang',
    title: 'Hà Giang Việt Nam',
    image_banner: IMAGE.IMG_RUONGBT,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '30.000.000 vnd',
  },
  {
    text: 'Hồ Hoàn Kiếm',
    title: 'Hà Nội Việt Nam',
    image_banner: IMAGE.IMG_HANOI,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '10.000.000 vnd',
  },
  {
    text: 'Vịnh Hạ Long',
    title: 'Hải Phòng Việt Nam',
    image_banner: IMAGE.IMG_HALONG,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '20.000.000 vnd',
  },
  {
    text: 'Ruộng Bậc Thang',
    title: 'Hà Giang Việt Nam',
    image_banner: IMAGE.IMG_RUONGBT,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '30.000.000 vnd',
  },
  {
    text: 'Hồ Hoàn Kiếm',
    title: 'Hà Nội Việt Nam',
    image_banner: IMAGE.IMG_HANOI,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '10.000.000 vnd',
  },
  {
    text: 'Vinh ha long',
    title: 'Hải Phòng Việt Nam',
    image_banner: IMAGE.IMG_HALONG,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '20.000.000 vnd',
  },
  {
    text: 'Ruộng Bậc Thang',
    title: 'Hà Giang Việt Nam',
    image_banner: IMAGE.IMG_RUONGBT,
    review: [
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '30.000.000 vnd',
  },
  {
    text: 'Hồ Hoàn Kiếm',
    title: 'Hà Nội Việt Nam',
    image_banner: IMAGE.IMG_HANOI,
    review: [
      'http://192.168.1.2:81/img/haNoi.jpg',
      'http://192.168.1.2:81/img/vinhHaLong.jpg',
      'http://192.168.1.2:81/img/haNoi.jpg',
      'http://192.168.1.2:81/img/vinhHaLong.jpg',
    ],
    price: '10.000.000 vnd',
  },
];
export default class Cart extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>halo</Text>
        <ScrollView horizontal scrollEnabled pagingEnabled>
          <ImageBackground
            source={{uri: 'http://192.168.1.2:81/img/vinhHaLong.jpg'}}
            style={{width: 400, height: 200}}
          />
        </ScrollView>
      </View>
    );
  }
}
