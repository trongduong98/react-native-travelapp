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
  Alert,
  Image,
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
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      secureTextEntry: true,
      secureTextEntry_confirm: true,
    };
  }
  UserRegistrationFunction = () => {
    if (
      this.state.UserName !== '' &&
      this.state.UserEmail !== '' &&
      this.state.UserPassword !== ''
    ) {
      fetch('http://192.168.1.6:81/user_registration.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.UserName,

          email: this.state.UserEmail,

          password: this.state.UserPassword,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Báo lỗi nếu chưa nhập sdt
      alert('Vui lòng nhập thông tin đăng ký');
    }
  };
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
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../icon/back.png')} />
            </TouchableOpacity>
            <Text style={styles.welcome}>Welcome !</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.footer}>
            <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
              <Text style={styles.text_footer}>Name</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="rgb(65,105,225)" size={35} />
                <TextInput
                  placeholder="name"
                  style={styles.inputText}
                  onChangeText={name => this.setState({UserName: name})}
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text style={styles.text_footer}>E-MAIL</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="rgb(65,105,225)" size={35} />
                <TextInput
                  placeholder="email"
                  secureTextEntry={false}
                  style={styles.inputText}
                  value={this.state.UserEmail}
                  onChangeText={email => this.setState({UserEmail: email})}
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text style={styles.text_footer}>Password</Text>
              <View style={styles.action}>
                <Feather name="lock" color="rgb(65,105,225)" size={37} />
                {this.state.secureTextEntry_confirm ? (
                  <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    style={styles.inputText}
                    value={this.state.UserPassword}
                    onChangeText={password =>
                      this.setState({UserPassword: password})
                    }
                    underlineColorAndroid="transparent"
                  />
                ) : (
                  <TextInput
                    placeholder="password"
                    secureTextEntry={false}
                    style={styles.inputText}
                    value={this.state.UserPassword}
                    onChangeText={text => this.setState({UserPassword: text})}
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
                onPress={this.UserRegistrationFunction}
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
