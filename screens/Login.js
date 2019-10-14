import React, {Component} from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  Body,
  Form,
  Label,
  Button,
} from 'native-base';
import {StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
      button: true,
      colorOfButton: 'grey',
      nameOfIcon: 'eye-slash',
      securePassword: true,
    };
  }

  validationOfEmail = input => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(input) === false) {
      this.setState({email: false});
    } else {
      this.setState({email: true});
    }
  };

  validationOfPassword = input => {
    let word = input.length;
    if (word < 5) {
      this.setState({password: false});
    } else {
      this.setState({password: true});
    }
  };

  buttonValidation = () => {
    let email = this.state.email;
    let password = this.state.password;
    if (email == true && password == true) {
      return false;
    } else {
      return true;
    }
  };

  showPassword = () => {
    if (this.state.securePassword == true) {
      this.setState({securePassword: false});
      this.setState({nameOfIcon: 'eye'});
    } else {
      this.setState({securePassword: true});
      this.setState({nameOfIcon: 'eye-slash'});
    }
  };

  render() {
    const buttonStyle = this.buttonValidation()
      ? styles.buttonLayoutDisable
      : styles.buttonLayoutEnable;
    const textStyle = this.buttonValidation()
      ? styles.TextButtonDisable
      : styles.TextButtonEnable;
    return (
      <Container style={styles.Layout}>
        <Content>
          <Body style={styles.Item}>
            <Image
              style={styles.Container}
              source={{
                uri: 'https://i.ibb.co/WsVyc7n/output-onlinepngtools.png',
              }}
            />
          </Body>
          <Form style={styles.Form}>
            <Content style={styles.layoutLabelInput}>
              <Text style={styles.Texting}>LOG IN</Text>
              <Text style={styles.secondTexting}>
                Login with your account LoneToon
              </Text>
              <Label style={styles.Label}>E-mail</Label>
              <Item regular style={styles.Item}>
                <Input
                  style={styles.Input}
                  onChangeText={input => this.validationOfEmail(input)}
                />
              </Item>
              <Label style={styles.Label}>Password</Label>
              <Item regular>
                <Input
                  style={styles.Input}
                  onChangeText={input => this.validationOfPassword(input)}
                  secureTextEntry={this.state.securePassword}
                />
                <Icon
                  name={this.state.nameOfIcon}
                  style={styles.Icon}
                  onPress={() => this.showPassword()}></Icon>
              </Item>
              <Button
                disabled={this.buttonValidation()}
                onPress={() => this.props.navigation.navigate('App')}
                style={buttonStyle}>
                <Text style={textStyle}>Log In</Text>
              </Button>
            </Content>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: '#ffcc99',
  },
  Container: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -70,
  },
  Item: {
    marginTop: 80,
  },
  Form: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgb(185,145,102)',
  },
  Label: {
    marginBottom: 4,
    color: 'black',
    fontSize: 20,
  },
  Texting: {
    marginRight: 130,
    marginLeft: 130,
    fontSize: 25,
    marginTop: 15,
    color: 'black',
  },
  secondTexting: {
    marginRight: 30,
    marginLeft: 30,
    fontSize: 18,
    marginBottom: 40,
    color: 'black',
  },
  layoutLabelInput: {
    marginLeft: 10,
    marginRight: 10,
  },
  buttonLayoutDisable: {
    marginTop: 22,
    marginBottom: 30,
    padding: 147,
    backgroundColor: '#ffcc99',
  },
  buttonLayoutEnable: {
    marginTop: 22,
    marginBottom: 30,
    padding: 147,
    backgroundColor: 'brown',
  },
  TextButtonDisable: {
    fontSize: 20,
    color: 'rgb(185,145,102)',
  },
  TextButtonEnable: {
    fontSize: 20,
    color: 'black',
  },
  Item: {
    marginBottom: 10,
  },
  Input: {
    color: 'black',
    fontSize: 20,
  },
  Icon: {
    fontSize: 30,
    marginRight: 12,
  },
});
