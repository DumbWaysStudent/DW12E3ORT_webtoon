import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Container, Content} from 'native-base';

const banners = [
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

export default class Episode extends Component {
  main = () => {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: 'white'}}>
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: 210,
            resizeMode: 'contain',
          }}
          source={{
            uri: navigation.getParam('image', ''),
          }}
        />
      </View>
    );
  };
  episode = () => {
    return (
      <View>
        <FlatList
          data={banners}
          renderItem={({item}) =>
            this.listEpisode(item.title, item.image, item.date)
          }
          keyExtractor={item => item.title}
        />
      </View>
    );
  };

  listEpisode = (title, image, date) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ReadToon', {title})}>
          <View
            style={{
              flexDirection: 'row',
              borderLeftWidth: 2,
              borderBottomWidth: 1,
              borderRightWidth: 1,
            }}>
            <View
              style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
              }}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                  resizeMode: 'contain',
                  borderWidth: 1,
                  borderColor: 'rgb(185,145,102)',
                }}
                source={{uri: image}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Text style={styles.Text}>{title}</Text>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: '#ffcc99'}}>
        <View style={{flex: 2}}>
          <Content>{this.main()}</Content>
        </View>
        <View style={{backgroundColor: '#ffcc99', flex: 5}}>
          <Content>{this.episode()}</Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    marginTop: -5,
    color: 'black',
  },
  dateText: {
    fontSize: 20,
    marginTop: 5,
    color: 'black',
  },
});
