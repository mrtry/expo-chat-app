import React from 'react'
import Chat from './src/ui/pages/chat'
import { View, StyleSheet } from 'react-native'
import { getBottomSpace, ifIphoneX } from 'react-native-iphone-x-helper'
import { ColorPallet } from './src/ui/styles'

const app = () => (
  <View style={styles.container}>
    <Chat />
  </View>
)

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

export default app
