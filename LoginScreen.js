import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native'


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginAs: '',
    }

    this.getLoginAs()
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
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Button
            title="Login"
            onPress={() => this.login()}
          />
        </View>
        <Text>Login as: {this.state.loginAs}</Text>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Button
            title="Logout"
            onPress={() => this.logout()}
          />
        </View>
      </View>
    )
  }

  login () {
    let data = new FormData()
    data.append('username', this.state.username)
    data.append('password', this.state.password)

    fetch('http://192.168.1.138:5000/login', {
      credentials: 'same-origin',
      method: 'POST',
      body: data
    }).then((response) => {
      if (response.status == 200) {
        return response.json()
      } else {
        throw Error('Invalid username or password')
      }
    }).then((responseJson) => {
      Alert.alert('Login Success', 'Hi ' + responseJson.username)
      this.getLoginAs()
    }).catch((error) => {
      Alert.alert('Login Error', '' + error)
    })
  }

  getLoginAs () {
    fetch('http://192.168.1.138:5000/login/as', {
      credentials: 'same-origin',
    }).then((response) => {
      if (response.status == 200) {
        return response.json()
      } else {
        throw Error
      }
    }).then((responseJson) => {
      this.setState({
        loginAs: responseJson.username
      })
    }).catch((error) => {
      this.setState({
        loginAs: ''
      })
    })
  }

  logout () {
    fetch('http://192.168.1.138:5000/logout', {
      credentials: 'same-origin',
    }).then(() => { this.getLoginAs() })
    .catch(() => { this.getLoginAs() })
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
