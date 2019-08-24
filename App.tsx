import React from 'react'
import firebase from 'firebase'
import { View, StyleSheet } from 'react-native'
import { getBottomSpace, ifIphoneX } from 'react-native-iphone-x-helper'

import Chat from './src/ui/components/template/Chat'
import { ColorPallet } from './src/ui/styles'
import config from './firebaseConfig'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: getBottomSpace(),
    ...ifIphoneX(
      {
        borderBottomWidth: 1,
        borderColor: ColorPallet.gray300,
      },
      {}
    ),
  },
})
