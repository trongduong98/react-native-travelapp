import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
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
            style={styles.tour}
            imageStyle={styles.img}
            source={IMAGE.IMG_RUONGBT}>
            <View style={styles.info}>
              <View
                style={{
                  backgroundColor: 'gray',
                  height: 90,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <Text style={{fontSize: 20, marginLeft: 20}}>
                  thong tin co ban
                </Text>
                <Text> teen tour ddax chon</Text>
              </View>
              <View>
                <InputSpinner
                  min={1}
                  step={1}
                  rounded={false}
                  showBorder={true}
                  fontSize={15}
                  inputStyle={{
                    paddingVertical: 5,
                  }}
                  width={100}
                  height={30}
                  // value={item.quantity}
                  // onIncrease={increased => {
                  //   this.editItemCart(item, 'add');
                  // }}
                  // onDecrease={decreased => {
                  //   this.editItemCart(item, 'sub');
                  // }}
                  // style={styles.cartSpinner}
                />
              </View>
            </View>
          </ImageBackground>
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
    backgroundColor: 'blue',
  },
  tour: {
    height: 220,
    marginTop: -120,
    width: 350,
    marginLeft: -40,
  },
  img: {
    borderRadius: 20,
  },
  info: {
    backgroundColor: 'white',
    marginHorizontal: 50,
    height: 150,
    width: 320,
    borderRadius: 20,
    marginLeft: 75,
    marginTop: 150,
  },
  Show: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
