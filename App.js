import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ForYouMain from './src/ForYouMain';
import ForLogin from './src/ForLogin';


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
    }
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
