import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Body, Container, Content, Item, Input, Button} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const listData = [
  {
    title: 'Episode 1',
    image:
      'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg',
    date: '8 August 2019',
  },
  {
    title: 'Episode 2',
    image: 'https://i.redd.it/gmvbwlihhgcz.jpg',
    date: '13 August 2019',
  },
  {
    title: 'Episode 3',
    image:
      'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png',
    date: '19 August 2019',
  },
];

class CreateLonetoon extends Component {
  addNew = () => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: sizeOfFont, marginBottom: 5}}>Title</Text>
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
        <Text style={{fontSize: sizeOfFont}}>Episode</Text>
        <FlatList
          style={{
            height: Dimensions.get('window').height - 300,
            marginBottom: 20,
          }}
          data={listData}
          renderItem={({item}) =>
            this.myListData(item.title, item.image, item.date)
          }
          keyExtractor={item => item.title}
        />
      </View>
    );
  };

  myListData = (title, image, date) => {
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
            justifyContent: 'center',
            marginLeft: 20,
            marginTop: -10,
          }}>
          <Text style={{fontSize: sizeOfFont}}>{title}</Text>
          <Text style={{fontSize: sizeOfFont, marginTop: 5}}>{date}</Text>
        </View>
      </View>
    );
  };

  addEpisode = () => {
    return (
      <View>
        <Button
          style={{justifyContent: 'center', backgroundColor: '#ffcc99'}}
          onPress={() => this.props.navigation.navigate('CreateEpisode')}>
          <Text style={{fontSize: sizeOfFont}}>+ Add Episode</Text>
        </Button>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={{backgroundColor: 'rgb(185, 145, 102)', flex: 1}}>
          <View style={{margin: 10}}>
            {this.addNew()}
            {this.ListItem()}
            {this.addEpisode()}
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
