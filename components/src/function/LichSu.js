import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  Image,
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
      <SafeAreaView style={styles.view}>
        <View style={styles.list}>
          <FlatList
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={listCardsHistory}
            renderItem={({item}) => (
              <View style={styles.flatlist}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('HomeDetail', {ThamSo: item})
                  }>
                  <Image
                    source={item.image_banner}
                    style={[styles.image, styles.shadow]}
                  />
                  <View style={styles.text}>
                    <Text style={styles.Header_Text}>{item.text}</Text>
                    <Text style={styles.Title_Text}>{item.title}</Text>
                    <Text style={styles.price_Text}>{item.price}</Text>
                  </View>
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
  view: {
    flex: 1,
    backgroundColor: 'rgba(135,206,250,0.3)',
  },
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
    backgroundColor: 'rgba(230,230,250,1)',
    borderBottomRightRadius: 20,
  },
  Header_Text: {
    fontSize: 20,
    marginLeft: 15,
  },
  Title_Text: {
    marginLeft: 20,
    fontSize: 16,
    color: 'gray',
  },
  price_Text: {
    fontSize: 20,
    marginLeft: 15,
  },
  shadow: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
