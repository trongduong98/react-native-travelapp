import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../constants/image';
const {width, height} = Dimensions.get('screen');
import {FlatList} from 'react-native-gesture-handler';

const listCardsHistory = [
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

export class LichSuScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <View style={styles.list}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listCardsHistory}
            renderItem={({item}) => (
              <View style={styles.margin}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('HomeDetail', {ThamSo: item})
                  }>
                  <ImageBackground
                    source={item.image}
                    style={styles.img}
                    imageStyle={styles.imgbackground}>
                    <View style={[styles.infoImage, styles.shadow]}>
                      <Text>{item.text}</Text>
                      <Text>{item.title}</Text>
                      <Text>{item.price}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list: {
    marginHorizontal: 20,
  },
  img: {
    width: width - 20 * 2,
    height: height - 220 * 2,
  },
  imgbackground: {
    borderRadius: 35,
  },
  infoImage: {
    position: 'absolute',
    borderRadius: 20,
    padding: 15,
    right: 0,
    left: 0,
    bottom: -45,
    backgroundColor: '#FFFFFF',
  },
  margin: {
    marginTop: 70,
  },
  shadow: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0,
  },
});
