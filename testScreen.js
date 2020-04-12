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
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
      'http://192.168.1.8:81/img/haNoi.jpg',
      'http://192.168.1.8:81/img/vinhHaLong.jpg',
    ],
    price: '10.000.000 vnd',
  },
];
export default class Cart extends Component {
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={listCardsAll}
          renderItem={({item}) => (
            <View style={styles.flatlist}>
              <TouchableOpacity>
                <Image source={item.image_banner} style={styles.image} />
                <View style={styles.text}>
                  <Text>asdasd</Text>
                  <Text>asdasd</Text>
                  <Text>asdasd</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginHorizontal: 20,
  },
  flatlist: {
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
