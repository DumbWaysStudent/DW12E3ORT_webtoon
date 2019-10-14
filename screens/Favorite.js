import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {Input, Item, Icon, Container, Content, Body} from 'native-base';

const favoriteListItem = [
  {
    title: 'Adventure of Arya',
    images:
      'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg',
    fav: '98 Fav',
  },
  {
    title: 'The Jon Snow',
    images: 'https://i.redd.it/gmvbwlihhgcz.jpg',
    fav: '95 Fav',
  },
  {
    title: 'Mother of Dragons',
    images:
      'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png',
    fav: '89 Fav',
  },
];

class Favorite extends Component {
  FavoriteList = (title, image, numfavorite) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          borderWidth: 2,
          borderColor: 'white',
          backgroundColor: '#ffcc99',
        }}>
        <Image style={{width: 110, height: 110}} source={{uri: image}} />
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 20, marginBottom: 5, marginTop: 25}}>
            {title}
          </Text>
          <Text style={{color: 'brown', fontSize: 18}}>{numfavorite}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container style={styles.Layout}>
        <View style={{flex: 1}}>
          <Content>
            <Body style={styles.bodySearch}>
              <Item style={styles.Item} regular>
                <Input style={styles.Input} />
                <Icon name="search" />
              </Item>
            </Body>
          </Content>
        </View>
        <View style={{flex: 9}}>
          <Content>
            <View
              style={{
                backgroundColor: 'rgb(185,145,102)',
                marginBottom: 0,
                justifyContent: 'center',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 15,
                height: Dimensions.get('window').height - 170,
                borderWidth: 1,
              }}>
              <FlatList
                data={favoriteListItem}
                renderItem={({item}) =>
                  this.FavoriteList(item.title, item.images, item.fav)
                }
                keyExtractor={item => item.title}
              />
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: '#ffcc99',
  },
  Item: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgb(185,145,102)',
  },
  Input: {
    color: 'white',
    fontSize: 18,
    borderLeftWidth: 1,
    marginLeft: -2,
  },
  bodySearch: {
    margin: 10,
    borderWidth: 1,
  },
});

export default Favorite;
