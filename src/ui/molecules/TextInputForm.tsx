import React from 'react'
import { StyleSheet, View, ViewStyle, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import TextInput from '../atoms/textInput'
import styleType from '../../utils/styleType'
import { ColorPallet } from '../styles'

interface Props {
  currentText: string
  placeholder?: string
  onChangeText: (text: string) => void
  onSendButtonPressed: () => void
}

const component = (props: Props) => (
  <View style={styles.inputTextContainer}>
    <TextInput
      placeholder={props.placeholder}
      value={props.currentText}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSendButtonPressed}
      style={styles.textInput}
    />
    <TouchableOpacity
      style={styles.sendButton}
      onPress={props.onSendButtonPressed}
    >
      <MaterialIcons name="near-me" size={32} color={ColorPallet.gray800} />
    </TouchableOpacity>
  </View>
)

export default component

const styles = StyleSheet.create({
  inputTextContainer: styleType<ViewStyle>({
    height: 48,
    flexDirection: 'row',
  }),
  sendButton: styleType<ViewStyle>({
    padding: 8,
    justifyContent: 'center',
  }),
  textInput: styleType<ViewStyle>({
    flex: 1,
  }),
})
