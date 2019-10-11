import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import { Input, Item, Icon } from 'native-base';

const MyFavouriteList = [{
    title: 'Adventure of Arya',
    images: 'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg',
    fav: '98 Fav'
}, {
    title: 'The Jon Snow',
    images: 'https://i.redd.it/gmvbwlihhgcz.jpg',
    fav: '95 Fav'
}, {
    title: 'Mother of Dragons',
    images: 'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png',
    fav: '89 Fav'
}];

class MyFavourite extends Component {

    search = () => {
        return (
            <View style={{ flex: 1 }}>
                <Item regular style={{ margin: 30, marginLeft: 30, marginBottom: 15, borderWidth: 2, borderColor: 'black' }}>
                    <Input placeholder="Search ..."></Input>
                    <Icon name="search"></Icon>
                </Item>
            </View>
        );
    }

    myListItem = (myFavTitle, myFavImages, myFavList) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.myListItemStyle} source={{ uri: myFavImages }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, marginBottom: 5, marginTop: 25 }}>{myFavTitle}</Text>
                    <Text style={{ color: 'grey', fontSize: 15 }}>{myFavList}</Text>
                </View>
            </View>
        )
    }

    listItem = () => {
        return (
            <View style={{ marginLeft: 11, flex: 5.5 }}>
                <FlatList
                    data={MyFavouriteList}
                    renderItem={({ item }) => this.myListItem(item.title, item.images, item.fav)}
                    keyExtractor={item => item.title}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.search()}
                {this.listItem()}
                <View style={{ flex: 0.2 }}>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create(
    {
        myListItemStyle: {
            height: 80,
            width: 80,
            resizeMode: 'contain',
            marginLeft: 20,
            borderColor: 'black',
            borderWidth: 2,
            margin: 10,
            marginRight: 5
        }
    }
)


export default MyFavourite