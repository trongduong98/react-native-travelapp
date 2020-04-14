import * as React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/image';
const {width, height} = Dimensions.get('screen');

const listCards = [
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
export class HomeScreen extends Component {
  //banner tự chuyển ảnh
  constructor(props) {
    super(props);
    this.state = {
      pointer: 0,
      listImage: [
        {
          url: IMAGE.IMG_BANNER2,
        },
        {
          url: IMAGE.IMG_BANNER3,
        },
        {
          url: IMAGE.IMG_BANNER4,
        },
      ],
    };
  }
  changeImage() {
    let pointer = this.state.pointer;
    pointer = pointer + 1;
    if (pointer === this.state.listImage.length) {
      pointer = 0;
    }
    this.setState({
      pointer: pointer,
    });
  }
  componentDidMount() {
    this._interval = setInterval(() => {
      this.changeImage();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  //kết thúc tự chuyển ảnh banner
  render() {
    return (
      <View style={styles.styleFex}>
        <CustomHeader
          Title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={[styles.viewBanner, styles.colum]}>
          <ImageBackground
            style={[styles.styleFex, styles.shadow, styles.banner]}
            imageStyle={styles.imgBackground}
            source={{uri: this.state.listImage[this.state.pointer].url}}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.TieuDeList}>Địa điểm nỗi bật</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('More')}>
            <Text style={styles.XemThem}>Xem thêm ></Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.styleFex, styles.viewList, styles.colum]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={listCards}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('HomeDetail', {ThamSo: item})
                  }>
                  <Image
                    source={item.image_banner}
                    style={[styles.imageCard, styles.shadow]}
                  />
                  <Text style={styles.text}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  styleFex: {
    flex: 1,
  },
  colum: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  viewBanner: {
    paddingHorizontal: 20,
    flex: 0.8,
  },
  viewList: {
    paddingHorizontal: 10,
  },
  banner: {
    width: width - 20 * 2,
    borderRadius: 12,
    marginLeft: 2,
    marginHorizontal: 10,
    overflow: 'visible',
  },
  infoImage: {
    position: 'absolute',
    borderRadius: 12,
    padding: 24,
    right: 36,
    left: 36,
    bottom: -35,
    backgroundColor: 'rgba(135,206,250,0.7)',
  },
  lisCard: {
    marginTop: 50,
    overflow: 'visible',
  },
  imageCard: {
    width: width - 120 * 2,
    height: height - 260 * 2,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  listImgCard: {
    width: width - 36 * 2,
    borderRadius: 12,
    marginLeft: 12,
    backgroundColor: 'gray',
  },
  TieuDeList: {
    marginTop: 39,
    marginBottom: 10,
    marginLeft: 14,
    fontSize: 20,
    overflow: 'visible',
  },
  XemThem: {
    marginTop: 39,
    marginBottom: 10,
    marginLeft: 130,
    fontSize: 20,
    textDecorationLine: 'underline',
    overflow: 'visible',
  },
  shadow: {
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  imgBackground: {
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4,
  },
});
