import 'react-native-gesture-handler';
import * as React from 'react';
import {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {CustomHeader} from '../index';
import {Button, Text} from 'native-base';

export class HistoryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <CustomHeader Title="Thông tin" navigation={this.props.navigation} />
        <View>
          <Text>history</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
 
});
