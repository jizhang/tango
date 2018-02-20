import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <View style={{flex: 1, marginTop: 15}}>
          <Button
            title="Login"
            onPress={() => this.login()}
          />
        </View>
      </View>
    )
  }

  login () {
    Alert.alert('Login', 'Hi ' + this.state.username)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  textInput: {
    fontSize: 16,
    height: 40,
    paddingLeft: 5,
    paddingRight: 5
  }
})
