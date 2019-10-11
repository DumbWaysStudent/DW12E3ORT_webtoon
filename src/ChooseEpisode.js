import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';

const banners = [{
    title: 'Episode 1',
    images: 'https://66.media.tumblr.com/b23f2200f6158669967e00fbca9022a6/tumblr_ovfv41J7WU1w8z7sho1_1280.jpg',
    date: '8 August 2019'
}, {
    title: 'Episode 2',
    images: 'https://i.redd.it/gmvbwlihhgcz.jpg',
    date: '13 August 2019'
}, {
    title: 'Episode 3',
    images: 'https://i.pinimg.com/originals/8f/10/33/8f1033288d189e6ee7940575d1b6c445.png',
    date: '19 August 2019'
},
];

const widthMainImage = Dimensions.get('window').width

export default class HomeScreen extends Component {

    Lister = (picture, titleId, dateRelease) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity >
                    <Image style={styles.listEpisodeImage} source={{ uri: picture }} />
                </TouchableOpacity >
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginTop: 40, marginBottom: 10, fontSize: 20 }}>{titleId}</Text>
                    <Text style={{ fontSize: 20 }}>{dateRelease}</Text>
                </View>
            </View>
        )
    }

    forMainImage = () => {
        const { navigation } = this.props;
        return (
            <View>
                <Image style={styles.mainImage} source={{ uri: navigation.getParam('images', '') }} />
            </View>
        )
    }

    forFlatList = () => {
        return (
            <View style={{ borderWidth: 5 }}>
                <FlatList
                    data={banners}
                    renderItem={({ item }) => this.Lister(item.images, item.title, item.date)}
                    keyExtractor={item => item.title}
                />
            </View>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {this.forMainImage()}
                </View>
                <View style={{ flex: 1.8 }}>
                    {this.forFlatList()}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    listEpisodeImage: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        margin: 20
    },
    mainImage: {
        width: widthMainImage,
        height: 220,
        resizeMode: 'contain',
        marginBottom: 0,
        borderWidth: 2,
        borderColor: 'black'
    }
})
