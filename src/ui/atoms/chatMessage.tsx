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

import { Message } from '../../store/entity/message'
import styleType from '../../utils/styleType'
import { ColorPallet } from '../styles'

interface Props {
  message: Message
  style?: StyleProp<TextStyle>
  owner: Owner
}

export type Owner = 'me' | 'other'

const component = (props: Props) => {
  const side =
    props.owner == 'me' ? styles.containerRightSide : styles.containerLeftSide
  return (
    <View style={[styles.container, side, props.style]}>
      <View style={[styles.borderContainer, side]}>
        <Text style={styles.message}>{props.message.body}</Text>
      </View>
      <Text style={[styles.postedAt, side]}>
        {distanceInWordsToNow(props.message.postedAt, { locale: ja })}
      </Text>
    </View>
  )
}

export default component

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    flexDirection: 'column',
  }),
  containerLeftSide: styleType<ViewStyle>({
    alignSelf: 'flex-start',
  }),
  containerRightSide: styleType<ViewStyle>({
    alignSelf: 'flex-end',
  }),
  borderContainer: styleType<ViewStyle>({
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
    marginHorizontal: 8,
  }),
})
