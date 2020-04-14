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
} from 'react-native';
import {CustomHeader} from '../index';
import InputSpinner from 'react-native-input-spinner';
import {IMAGE} from '../constants/image';

export class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safearview}>
        <CustomHeader Title="Thanh Toan" navigation={this.props.navigation} />
        <View style={styles.input}>
          <ImageBackground
            source={IMAGE.IMG_HALONG}
            style={[styles.image_style, styles.shadow]}
            imageStyle={styles.img}
          />
          <View style={[styles.info, styles.shadow]}>
            <View style={styles.title_style}>
              <Text style={{fontSize: 25, marginLeft: 20}}>Tour đã đặt</Text>
              <Text> teen tour ddax chon</Text>
            </View>
            <View style={styles.title_style2}>
              <InputSpinner
                min={1}
                step={1}
                rounded={false}
                showBorder={true}
                fontSize={15}
                inputStyle={{
                  paddingVertical: 4,
                }}
                width={100}
                height={30}
                style={{marginTop: 15, marginLeft: 30}}
                // value={item.quantity}
                // onIncrease={increased => {
                //   this.editItemCart(item, 'add');
                // }}
                // onDecrease={decreased => {
                //   this.editItemCart(item, 'sub');
                // }}
                // style={styles.cartSpinner}
              />
              <TouchableOpacity>
                <Image source={IMAGE.ICON_DELETE} style={styles.image_delete} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.Show} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safearview: {
    flex: 1,
  },
  flexColum: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_style: {
    width: '90%',
    height: '60%',
    borderRadius: 15,
    marginTop: 2,
    marginLeft: -14,
    overflow: 'visible',
  },
  img: {
    borderRadius: 15,
  },
  info: {
    backgroundColor: 'white',
    overflow: 'visible',
    marginHorizontal: 50,
    height: 150,
    width: 320,
    borderRadius: 20,
    marginLeft: 130,
    marginTop: -30,
  },
  title_style: {
    height: 90,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title_style2: {
    flex: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  image_delete: {
    width: 35,
    height: 35,
    marginLeft: 130,
    marginTop: 13,
    flexDirection: 'row',
  },
  Show: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
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
});
