import React, { Component } from 'react';
import { Text, Container, Input, Button, View, Item, Icon } from 'native-base';

export default class ForLogin extends Component {
  constructor() {
    super();
    {
      this.state = {
        email: false,
        password: false,
        showHide: true,
        colors: 'grey'
      }
    }
  }


  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: false })
    }
    else {
      this.setState({ email: true })
    }
  }

  //Validasi Password dengan panjang minimal 8 karakter
  validatePassword = (pass) => {
    let word = pass.length;
    if (word < 7) {
      this.setState({ password: false })
    }
    else {
      this.setState({ password: true })
    }
  }

  validate = () => {
    const mail = this.state.email;
    const pw = this.state.password;
    if (mail == true && pw == true) {
      return false
    }
    else {
      return true
    }
  }

  hideShowButton = () => {
    const a = !this.state.showHide;
    this.setState({ showHide: a });
    let colour;
    if (this.state.showHide == false) {
      colour = 'grey'
    } else {
      colour = 'green'
    }
    this.setState({ colors: colour })
  }

  renderList = () => {
    return (
      <Container>
        <Text style={styles.emailPassword}> Email </Text>
        <Item regular style={styles.forItem}>
          <Input
            placeholder='your email address'
            onChangeText={(text) => this.validateEmail(text)}
          />
        </Item>
        <Text style={styles.emailPassword}> Password </Text>
        <Item regular style={styles.forItem}>
          <Input
            secureTextEntry={this.state.showHide}
            placeholder='your password'
            onChangeText={(pass) => this.validatePassword(pass)}
          />
          <Icon name="eye" style={{ color: this.state.colors }} onPress={() => this.hideShowButton()}></Icon>
        </Item>
        <Button success style={styles.forItem} disabled={this.validate()}>
          <Text style={{ marginLeft: 118, fontSize: 20 }}>Login</Text>
        </Button>
      </Container>
    )
  }

  render() {
    return (
      <Container>
        <View style={styles.view}>
          <Text style={{ fontSize: 25 }}>LOG IN</Text>
          <Text style={{ fontSize: 18 }}>Login with your account WEBTOON</Text>
        </View>
        {this.renderList()}
      </Container>
    )
  }
}

const styles = {
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 110,
    marginBottom: 30
  },
  login: {
    fontSize: 30,
    marginBottom: 5
  },
  emailPassword: {
    fontSize: 17,
    marginLeft: 35,
    marginBottom: 3
  },
  inputEmailPassword: {
    fontSize: 18,
    padding: 1
  },
  forItem: {
    marginTop: 4,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15
  },
  forTextButtonLogin: {
    alignItems: 'center',
    fontSize: 20
  }
}