import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Item, Input, Button} from 'native-base';

const listData = [
  {
    title: '1. cover.png',
    image:
      'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg',
  },
  {
    title: '2. introduction.png',
    image: 'https://i.redd.it/gmvbwlihhgcz.jpg',
  },
  {
    title: '3. story 1.png',
    image:
      'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png',
  },
];

class CreateLonetoon extends Component {
  nameImage = () => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: sizeOfFont, marginBottom: 5}}>Name</Text>
        <Item regular>
          <Input
            placeholder="Here"
            style={{
              backgroundColor: '#ffcc99',
              borderWidth: 2,
              borderColor: 'white',
              fontSize: 18,
            }}
          />
        </Item>
      </View>
    );
  };

  ListItem = () => {
    return (
      <View>
        <Text style={{fontSize: sizeOfFont}}>Add Images</Text>
        <FlatList
          style={{
            height: Dimensions.get('window').height - 350,
            marginBottom: 20,
          }}
          data={listData}
          renderItem={({item}) => this.myListData(item.title, item.image)}
          keyExtractor={item => item.title}
        />
      </View>
    );
  };

  myListData = (title, image) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 15,
          marginTop: 10,
          borderWidth: 2,
          backgroundColor: '#ffcc99',
          borderColor: 'white',
        }}>
        <Image style={{height: 110, width: 110}} source={{uri: image}} />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text style={{fontSize: sizeOfFont}}>{title}</Text>
        </View>
      </View>
    );
  };

  addEditeImage = () => {
    return (
      <View>
        <Button style={{justifyContent: 'center', backgroundColor: '#ffcc99'}}>
          <Text style={{fontSize: sizeOfFont}}>+ Images</Text>
        </Button>
        <Button
          style={{
            justifyContent: 'center',
            backgroundColor: '#ba443a',
            marginTop: 10,
          }}>
          <Text style={{fontSize: sizeOfFont}}>Delete Episode</Text>
        </Button>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={{backgroundColor: 'rgb(185, 145, 102)', flex: 1}}>
          <View style={{margin: 10}}>
            {this.nameImage()}
            {this.ListItem()}
            {this.addEditeImage()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffcc99',
  },
});

const sizeOfFont = 20;

export default CreateLonetoon;
