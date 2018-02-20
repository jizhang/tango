import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'


const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
