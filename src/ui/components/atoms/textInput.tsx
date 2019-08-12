import React from 'react'
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
} from 'react-native'
import styleType from '../../../utils/styleType'

interface Props {
  value?: string
  placeholder?: string
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
  style?: StyleProp<TextStyle>
}

const CustomTextInput = (props: Props) => (
  <TextInput
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={text => props.onChangeText(text)}
    onSubmitEditing={props.onSubmitEditing}
    style={[styles.container, props.style]}
  />
)

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    margin: 8,
    ...Platform.select({
      web: styleType<ViewStyle>({
        // @ts-ignore: Web用のProps
        outlineWidth: 0,
        borderWidth: 0,
        borderColor: 'white',
        backgroundColor: 'transparent',
      }),
    }),
  }),
})

export default CustomTextInput
