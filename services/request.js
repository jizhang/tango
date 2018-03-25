import qs from 'qs'
import _ from 'lodash'

const BASE_URL = 'http://192.168.1.138:5000' // TODO config

export default function request(url, params, post = false) { // TODO post
  url = BASE_URL + url
  if (!_.isEmpty(params)) {
    url += '?' + qs.stringify(params)
  }

  console.debug('fetch', url)
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json().then(responseJson => {
          console.debug(responseJson)
          return responseJson
        })
      }

      // global error handler, print error and swallow it
      // invoker need to check whether payload is empty
      return response.text().then(text => {
        console.error('status=' + response.status + ' message=' + text)
      }, error => {
        console.error('status=' + response.status + ' message=unknown error')
      })
    }, error => {
      console.error(error)
    })
}
