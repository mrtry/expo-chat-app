import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'
import { distanceInWordsToNow } from 'date-fns'
import ja from 'date-fns/locale/ja'
import styleType from '../../../utils/styleType'
import { ColorPallet } from '../../styles'

interface Props {
  message: Message
  style?: StyleProp<TextStyle>
}

const component = (props: Props) => (
  <View style={[styles.container, props.style]}>
    <Text style={styles.message}>{props.message.body}</Text>
    <Text style={styles.postedAt}>
      {distanceInWordsToNow(props.message.postedAt, { locale: ja })}
    </Text>
  </View>
)

export default component

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    padding: 8,
    alignSelf: 'baseline',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: ColorPallet.gray300,
  }),
  message: styleType<TextStyle>({
    fontSize: 14,
    color: ColorPallet.gray800,
  }),
  postedAt: styleType<TextStyle>({
    fontSize: 12,
    color: ColorPallet.gray500,
    marginTop: 8,
  }),
})
