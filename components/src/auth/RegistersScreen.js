import * as React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export class RegistersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      password: '',
      password_confirm: '',
      secureTextEntry: true,
      secureTextEntry_confirm: true,
    };
  }
  textInputChange(value) {
    if (value.length !== 0) {
      this.setState({
        check_textInputChange: true,
      });
    } else {
      this.setState({
        check_textInputChange: false,
      });
    }
  }
  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }
  secureTextEntry_confirm() {
    this.setState({
      secureTextEntry_confirm: !this.state.secureTextEntry_confirm,
    });
  }
  render() {
    return (
      <DismissKeyboard>
        <SafeAreaView style={styles.background}>
          <Animatable.View
            animation="zoomInDown"
            duration={1000}
            style={styles.header}>
            <Text style={styles.welcome}>Welcome !</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.footer}>
            <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
              <Text style={styles.text_footer}>E-MAIL</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="rgb(65,105,225)" size={35} />
                <TextInput
                  placeholder="Your gmail adress"
                  style={styles.inputText}
                  onChangeText={text => this.textInputChange(text)}
                />
                {this.state.check_textInputChange ? (
                  <Feather
                    name="check-circle"
                    color="rgb(65,105,225)"
                    size={35}
                  />
                ) : null}
              </View>
              <View style={styles.action}>
                <Feather name="lock" color="rgb(65,105,225)" size={37} />
                {this.state.secureTextEntry ? (
                  <TextInput
                    placeholder="Your password"
                    secureTextEntry={true}
                    style={styles.inputText}
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                  />
                ) : (
                  <TextInput
                    placeholder="Your password"
                    secureTextEntry={false}
                    style={styles.inputText}
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                  />
                )}
                <TouchableOpacity onPress={() => this.secureTextEntry()}>
                  {this.state.secureTextEntry ? (
                    <Feather name="eye-off" color="rgb(65,105,225)" size={35} />
                  ) : (
                    <Feather name="eye" color="rgb(65,105,225)" size={35} />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.action}>
                <Feather name="lock" color="rgb(65,105,225)" size={37} />
                {this.state.secureTextEntry_confirm ? (
                  <TextInput
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    style={styles.inputText}
                    value={this.state.password_confirm}
                    onChangeText={text =>
                      this.setState({password_confirm: text})
                    }
                  />
                ) : (
                  <TextInput
                    placeholder="Confirm password"
                    secureTextEntry={false}
                    style={styles.inputText}
                    value={this.state.password_confirm}
                    onChangeText={text =>
                      this.setState({password_confirm: text})
                    }
                  />
                )}
                <TouchableOpacity
                  onPress={() => this.secureTextEntry_confirm()}>
                  {this.state.secureTextEntry_confirm ? (
                    <Feather name="eye-off" color="rgb(65,105,225)" size={35} />
                  ) : (
                    <Feather name="eye" color="rgb(65,105,225)" size={35} />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.butomSingin}>
                <Text style={styles.bottonsingin}>SingUp</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(65,105,225)',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
  },
  welcome: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flex: 1.8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  text_footer: {
    color: '#05375A',
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    color: '#05375A',
  },
  forgotpass: {
    marginTop: 15,
    color: 'rgb(0,0,205)',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  butomSingin: {
    backgroundColor: 'rgb(30,144,255)',
    width: '100%',
    height: 60,
    marginTop: 18,
    borderRadius: 10,
  },
  butomSingup: {
    backgroundColor: 'rgb(224,255,255)',
    width: '100%',
    height: 60,
    marginTop: 18,
    borderRadius: 10,
    borderColor: 'rgb(30,144,255)',
    borderWidth: 1.5,
  },
  bottonsingin: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: '37%',
  },
  bottonSingup: {
    color: 'rgb(30,144,255)',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: '37%',
  },
});
