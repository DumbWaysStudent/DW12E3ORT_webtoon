import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Item } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import ForYouFile from './ForYouFile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavoriteFile from './FavouriteFile';
import ForProfileOne from './ForProfileOne';


const forNavigation = createMaterialBottomTabNavigator(
    {
        ForYou: {
            screen: ForYouFile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'dashboard'} />
                    </View>)
            }

        },
        Favorite: {
            screen: FavoriteFile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'star'} />
                    </View>)
            }
        },
        Profile: {
            screen: ForProfileOne,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'person'} />
                    </View>)

            }

        },
    },
    {
        shifting: false,
        activeColor: '#6200ee',
        inactiveColor: '#828792',
        barStyle: {
            backgroundColor: '#f8f7f9',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderStyle: 'solid',
            borderColor: '#d0cfd0',
        },
    }
);

export default createAppContainer(forNavigation);