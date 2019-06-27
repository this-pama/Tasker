
import LoginScreen from '../screens/login'
import SignUpScreen from '../screens/signUp'
import {createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon';

const AppStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',  
      headerStyle: {
          backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  },

  SignUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign Up',  
      headerStyle: {
          backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  },

},
{
  initialRouteName: "Login"
}
)


const AppContainer = createAppContainer(AppStack);
export default  AppContainer

