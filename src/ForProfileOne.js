import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


class Profile extends Component {

    iconic = () => {
        return (
            <View style={{ flex: 5.5, justifyContent: 'center', alignItems: 'center' }}>
                <Icon style={{ fontSize: 150, color: '#D3D3D3', marginTop: -10 }} name="user-circle-o" />
                <Text style={{ fontSize: 25, marginTop: 5 }}>Your Name</Text>
            </View>
        )
    }

    creation = () => {
        return (
            <View style={{ flex: 0.8, borderColor: 'black', borderWidth: 2, fontSize: 15, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 22, flex: 10 }}> My Webtoon Creation </Text>
                    <Icon name="chevron-right" style={{ fontSize: 20, flex: 1, marginTop: 5 }} />
                </View>
            </View>
        )
    }

    logout = () => {
        return (
            <View style={{ flex: 0.8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', borderTopWidth: 0 }} >
                <Text style={{ fontSize: 22 }}> Log Out </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.iconic()}
                {this.creation()}
                {this.logout()}
                <View style={{ flex: 3 }}>
                </View>
            </View>
        )
    }
}

class ProfileSetting extends Component {
    render() {
        return (
            <View>
                <Text>Profile 2</Text>
            </View>
        )
    }
}

const ProfileSlide = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            headerRight: (
                <Icon name="pencil" style={{ fontSize: 30, color: 'orange', marginRight: 15 }} />
            )
        }
    },
})

export default createAppContainer(ProfileSlide)