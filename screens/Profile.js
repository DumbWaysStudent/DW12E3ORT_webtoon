import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import EditProfile from './EditProfile';

class Profile extends Component {
  iconic = () => {
    return (
      <View style={{flex: 5.5, justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          style={{fontSize: 150, color: 'white', marginTop: -10}}
          name="user-circle-o"
        />
        <Text style={{fontSize: 25, marginTop: 5}}>
          Sony Alamsyah Megadiana
        </Text>
      </View>
    );
  };

  myToon = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MyToon')}
          style={{
            backgroundColor: 'rgb(185,145,102)',
            padding: 10,
            margin: 10,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
            }}>
            My Lonetoon Creation
          </Text>
          <Icon name="chevron-right" size={25} style={{marginLeft: 115}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(185,145,102)',
            padding: 10,
            margin: 10,
            flexDirection: 'row',
            marginTop: 0,
          }}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
            }}>
            Log Out
          </Text>
          <Icon name="chevron-right" size={25} style={{marginLeft: 240}} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.Layout}>
        <View
          style={{
            flex: 3.5,
            backgroundColor: 'rgb(185,145,102)',
            margin: 10,
            marginTop: 20,
          }}>
          <Body>{this.iconic()}</Body>
        </View>
        <View style={{flex: 4.5}}>{this.myToon()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: '#ffcc99',
  },
});

// export default Profile;

const ProfileSlide = createStackNavigator({
  thisProfile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
      headerRight: (
        <Icon
          onPress={() => navigation.navigate('Edit')}
          name="pencil"
          style={{fontSize: 30, color: 'orange', marginRight: 15}}
        />
      ),
    }),
  },
  Edit: {
    screen: EditProfile,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Profile',
      headerRight: (
        <Icon
          name="check"
          style={{fontSize: 30, color: 'orange', marginRight: 15}}
          onPress={() => navigation.navigate('thisProfile')}
        />
      ),
    }),
  },
});

export default createAppContainer(ProfileSlide);
