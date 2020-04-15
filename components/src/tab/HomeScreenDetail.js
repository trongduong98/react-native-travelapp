import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {CustomHeader} from '../index';
import {Button, Text} from 'native-base';

export class HomeScreenDetail extends Component {
  render() {
    const {ThamSo} = this.props.route.params;
    return (
      <SafeAreaView style={styles.flex}>
        <CustomHeader Title="Thông tin" navigation={this.props.navigation} />
        <View style={styles.flex}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center">
            {ThamSo.image.map((image, index) => (
              <Image
                key={`${index}-${image}`}
                source={{uri: image}}
                resizeMode="cover"
                style={[styles.styleImg, styles.flex]}
              />
            ))}
          </ScrollView>
        </View>
        <View style={[styles.flex]}>
          <ScrollView>
            <Text>Giới thiệu Tour</Text>
            <Text>{ThamSo.text}</Text>
            <Text>{ThamSo.title}</Text>
          </ScrollView>
        </View>
        <View style={styles.GiaTour}>
          <Text style={styles.Gia}>{ThamSo.price}</Text>
          <View style={styles.buttomDatTour}>
            <Button rounded danger>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cart')}>
                <Text style={styles.datTour}> Đặt Tour </Text>
              </TouchableOpacity>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  infoTour: {
    position: 'absolute',
    borderRadius: 12,
    left: 40,
    right: 40,
    backgroundColor: 'rgba(135,206,250,0.7)',
  },
  flex: {
    flex: 1,
  },
  flexrow: {
    flexDirection: 'row',
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0,
  },
  listInf: {
    flex: 4,
  },
  GiaTour: {
    flex: 0.2,
    flexDirection: 'row',
  },
  buttomDatTour: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
  },
  styleImg: {
    height: 250,
    width: 420,
  },
  headerConten: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ContenTour: {
    fontSize: 15,
  },
  Gia: {
    fontSize: 30,
    marginLeft: 6,
    marginTop: 4,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datTour: {
    fontSize: 28,
  },
});
