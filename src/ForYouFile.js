import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Item, Input, Icon, Footer, FooterTab, Button, Container } from 'native-base';



const BannerWidth = 350;
const BannerHeight = 210;

const banners = [{
  title: 'Adventure of Arya',
  images: 'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg'
}, {
  title: 'The Jon Snow',
  images: 'https://i.redd.it/gmvbwlihhgcz.jpg'
}, {
  title: 'Mother of Dragons',
  images: 'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png'
}];

class ForYouFile extends React.Component {

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode: 'contain' }} source={{ uri: image.images }} />
      </View>
    );
  }
  renderPage2(image, index) {
    return (
      <View key={index}>
        <Image style={styles.horizon} source={{ uri: image.images }} />
      </View>
    );
  }

  renderList() {
    return (
      <Item regular style={{ margin: 30, marginLeft: 30, marginBottom: 15, borderWidth: 2, borderColor: 'black' }}>
        <Input placeholder="input here"></Input>
        <Icon name="search"></Icon>
      </Item>
    );
  }

  scrollViewOne = () => {
    return (
      <View style={styles.container}>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
        >
          {banners.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    )
  }

  Horizontal = () => {
    return (
      <ScrollView horizontal={true}>
        {banners.map((image, index) =>
          <View key={index}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Episode', image)}
            >
              <Image style={styles.horizon} source={{ uri: image.images }} />
              <Text style={styles.TextOfHorizon}>{image.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    )
  }

  favFunction = () => {
    return (
      <View style={styles.scroll}>
        <Text style={styles.marigner}>  Favourite</Text>
        {this.Horizontal()}
      </View>
    )
  }

  AllFunction = () => {
    return (
      <View style={styles.scroll}>
        <Text style={styles.marigner}>  All</Text>
        <ScrollView>
          <View>
            {banners.map((image, index) =>
              <View key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Episode', image)}>
                    <Image style={styles.horizonTwo} source={{ uri: image.images }} />
                  </TouchableOpacity>
                  <View style={{ marginLeft: -25, flexDirection: 'column', width: 180 }}>
                    <Text style={{ fontSize: 18, marginTop: 10 }}>{image.title}</Text>
                    <View>
                      <Button style={{ width: 150, height: 35, marginTop: 3, backgroundColor: '#058ee3' }}>
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>+ Favourite</Text>
                      </Button>
                    </View>
                  </View>
                  <View style={{ backgroundColor: 'red' }}>
                  </View>
                </View>
              </View>
            )}
            <View>
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            {this.renderList()}
            {this.scrollViewOne()}
            {this.favFunction()}
            {this.AllFunction()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: BannerWidth,
    height: BannerHeight,
    alignItems: 'center',
    marginLeft: 30,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20
  },
  scroll: {
    marginTop: 10,
    marginLeft: 28,
    marginRight: 30,
    marginBottom: 20
  },
  horizon: {
    width: 120,
    height: 120,
    marginRight: 40,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10
  },
  horizonTwo: {
    width: 85,
    height: 85,
    marginRight: 40,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10
  },
  TextOfHorizon: {
    fontSize: 18,
    marginRight: 20,
    textAlign: "center"
  },
  bordering: {
    borderWidth: 2,
    borderColor: 'black'
  },
  marigner: {
    fontSize: 22,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginBottom: 5,
    marginTop: 5,
    borderTopWidth: 3,
    borderTopColor: 'black'
  }
});

export default ForYouFile