import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import TaskRecall from './screens/task/Recall'

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  TaskRecall: { screen: TaskRecall },
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
