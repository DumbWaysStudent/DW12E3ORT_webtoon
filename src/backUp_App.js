import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';
import { Share } from 'react-native';

import ForYouMain from './src/ForYouMain';
import ForLogin from './src/ForLogin';
import ChooseEpisode from './src/ChooseEpisode';
import DetailToons from './src/DetailToon';

const onShare = async shareMsg => {
    try {
        const result = await Share.share({
            message: shareMsg,
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};

const LoginScreenTab = createStackNavigator(
    {
        Login: {
            screen: ForLogin,
            navigationOptions: {
                header: null
            }
        }
    }
);

const AppScreenTab = createStackNavigator(
    {
        ForYouMain: {
            screen: ForYouMain,
            navigationOptions: {
                header: null
            }
        },
        Episode: {
            screen: ChooseEpisode,
            navigationOptions: ({ navigation }) => ({
                title: navigation.getParam('title', 'DefaultTitle'),
                headerRight: (
                    <Icon style={{ fontSize: 30, marginRight: 10 }} name="share" onPress={() => onShare('Let me share this')} />
                )
            })
        },
        ReadToon: {
            screen: DetailToons,
            navigationOptions: ({ navigation }) => ({
                title: navigation.getParam('title', 'DefaultTitle'),
                headerRight: (
                    <Icon style={{ fontSize: 30, marginRight: 10 }} name="share" onPress={() => onShare('Let me share this')} />
                )
            })
        },
    }
)

const AppContainer = createSwitchNavigator(
    {
        Auth: LoginScreenTab,
        App: AppScreenTab
    },
    {
        initialRouteName: 'Auth',
    },
)

export default createAppContainer(AppContainer);
