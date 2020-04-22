import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {CustomHeader} from '../index';
import InputSpinner from 'react-native-input-spinner';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {IMAGE} from '../constants/image';

export class CartScreen extends Component {
  // async setCart(cart) {
  //   try {
  //     await AsyncStorage.setItem('@Cart', JSON.stringify(cart));
  //     this.setState({
  //       cart: cart,
  //     });
  //   } catch (e) {
  //     // save error
  //   }
  // }
  // async getCart() {
  //   try {
  //     let cart = await AsyncStorage.getItem('@Cart');
  //     if (cart != null) {
  //       this.setState({
  //         cart: JSON.parse(cart),
  //       });
  //     }
  //   } catch (e) {
  //     // read error
  //   }
  // }
  // async removeCart() {
  //   try {
  //     await AsyncStorage.removeItem('@Cart');
  //   } catch (e) {
  //     // read error
  //   }
  // }
  // addItemCart(ThamSo) {
  //   // Get current list of products
  //   let tours = this.state.cart.tours;
  //   let idx = this.search(ThamSo, this.state.cart.tours);
  //   // Update the total price by quantity * price of the added product
  //   let totalPrice =
  //     this.state.cart.totalPrice + ThamSo.price * ThamSo.quantity;
  //   if (idx > -1) {
  //     tours[idx].quantity += 1;
  //   } else {
  //     tours.push(ThamSo);
  //   }
  //   // Update the state
  //   let cart = {
  //     tours: tours,
  //     totalPrice: totalPrice,
  //   };
  //   this.setCart(cart);
  // }
  // editItemCart(ThamSo, operation) {
  //   // Get current list of products
  //   let tours = this.state.cart.tours;
  //   let idx = this.search(ThamSo, tours);
  //   let totalPrice = parseInt(this.state.cart.totalPrice);

  //   if (operation == 'add') {
  //     totalPrice += parseInt(ThamSo.price);
  //     tours[idx].quantity += 1;
  //   } else if (operation == 'sub') {
  //     if (tours[idx].quantity > 1) {
  //       totalPrice -= parseInt(ThamSo.price);
  //       tours[idx].quantity -= 1;
  //     }
  //   }
  //   // Update the state
  //   let cart = {
  //     tours: tours,
  //     totalPrice: totalPrice,
  //   };
  //   this.setCart(cart);
  // }
  // removeItemCart(ThamSo) {
  //   let tours = this.state.cart.tours;
  //   let idx = this.search(ThamSo, tours);
  //   let totalPrice =
  //     this.state.cart.totalPrice - ThamSo.price * ThamSo.quantity;
  //   // Remove single item
  //   tours.splice(idx, 1);
  //   // Update the state
  //   let cart = {
  //     tours: tours,
  //     totalPrice: totalPrice,
  //   };
  //   this.setCart(cart);
  // }
  // search(ThamSo, tours) {
  //   for (var i = 0; i < tours.length; i++) {
  //     if (tours[i].id === ThamSo.id) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }
  // createBill() {
  //   // navigation
  //   let navigation = this.props.navigation;
  //   if (this.state.phoneInput !== '') {
  //     // Gửi thông tin lên server 192.168.64.2
  //     fetch('http://192.168.1.6:81/BillTour.php', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         fullName: this.state.nameInput,
  //         phone: this.state.phoneInput,
  //       }),
  //     })
  //       .then(response => response.text())
  //       .then(function(data) {
  //         // Thông báo đặt hàng thành công
  //         alert('Cám ơn bạn đã đặt tour ! ');
  //         // Chuyển về trang chủ
  //         navigation.navigate('HomeApp');
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   } else {
  //     // Báo lỗi nếu chưa nhập sdt
  //     alert('Vui lòng nhập số điện thoại');
  //   }
  // }
  // componentDidMount() {
  //   let {ThamSo} = this.props.route.params;
  //   if (ThamSo != null) {
  //     this.addItemCart(ThamSo);
  //   }
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cart: {
  //       tours: [],
  //       totalPrice: 0,
  //     },
  //     nameInput: '',
  //     phoneInput: '',
  //   };
  // }
  render() {
    console.log(this.props.route.params);
    const {Thamso} = this.props.route.params;
    return (
      <View style={styles.view}>
        <CustomHeader Title="Thanh toán" navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* {this.state.cart.tours != null && this.state.cart.tours.length > 0 ? (
            this.state.cart.tours.map((item, key) => {
              return ( */}
                <View>
                  <ImageBackground
                    source={IMAGE.IMG_HALONG}
                    style={[styles.image, styles.shadow]}
                    imageStyle={styles.style_image}
                  />
                  <View style={[styles.info, styles.shadow]}>
                    <View style={styles.detail_text}>
                      <Text style={styles.detail_tour}>details</Text>
                    </View>
                    <View style={styles.addDlete_cover}>
                      <InputSpinner
                        min={1}
                        step={1}
                        rounded={true}
                        showBorder={false}
                        fontSize={18}
                        inputStyle={{
                          paddingVertical: 5,
                        }}
                        width={130}
                        height={40}
                        style={{marginTop: 7, marginLeft: 20}}
                        // value={item.quantity}
                        // onIncrease={increased => {
                        //   this.editItemCart(item, 'add');
                        // }}
                        // onDecrease={decreased => {
                        //   this.editItemCart(item, 'sub');
                        // }}
                      />
                      <TouchableOpacity>
                        <Image
                          source={IMAGE.ICON_DELETE}
                          style={styles.image_delete}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              {/* );
            })
          ) : (
            <Text>Không có sản phẩm trong giỏ hàng</Text>
          )} */}
          <View style={styles.textInput_cover}>
            <Text style={styles.infomation_text}>Thông tin khách hàng</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              selectionColor="#922C88"
              placeholder="Vui lòng nhập họ tên "
            />
            <TextInput
              style={styles.textInput}
              multiline={true}
              selectionColor="#922C88"
              placeholder="Vui lòng nhập số điện thoại "
            />
          </View>
        </ScrollView>
        <View style={styles.cover_cart}>
          <View style={styles.info_Tour}>
            <Text style={styles.text_info}>số lượng: </Text>
          </View>
          <View style={styles.info_Tour}>
            <Text style={styles.text_info}>tổng tiền: </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.button_cover}>
              <Text style={styles.text_button}>Đặt tour</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 370,
    height: 180,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 15,
    marginRight: 10,
    overflow: 'visible',
  },
  style_image: {
    borderRadius: 15,
  },
  info: {
    backgroundColor: 'white',
    overflow: 'visible',
    marginHorizontal: 50,
    height: 130,
    width: 310,
    borderRadius: 20,
    marginLeft: 95,
    marginTop: -30,
  },
  detail_text: {
    flex: 1,
    flexDirection: 'column',
  },
  detail_tour: {
    fontSize: 22,
    marginTop: 4,
    marginLeft: 10,
  },
  addDlete_cover: {
    flex: 0.7,
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  image_delete: {
    width: 35,
    height: 35,
    marginLeft: 100,
    marginTop: 11,
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.6,
    borderWidth: 0.4,
    elevation: 18,
  },
  infomation_text: {
    fontSize: 22,
    marginLeft: 85,
  },
  textInput_cover: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    marginTop: 14,
  },
  info_Tour: {
    padding: 4,
    marginLeft: 10,
  },
  text_info: {
    fontSize: 18,
  },
  cover_cart: {
    backgroundColor: 'rgba(78, 81, 105, 0.4)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button_cover: {
    backgroundColor: '#006CA6',
    width: 393,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_button: {
    fontSize: 23,
    color: 'white',
  },
});
