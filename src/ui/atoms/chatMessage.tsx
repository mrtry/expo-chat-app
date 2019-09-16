import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'
import { Colors } from 'react-native-paper'
import { distanceInWordsToNow } from 'date-fns'
import ja from 'date-fns/locale/ja'

import { Message } from '../../store/entity/message'
import styleType from '../../utils/styleType'

interface Props {
  message: Message
  style?: StyleProp<TextStyle>
  owner: Owner
}

export type Owner = 'me' | 'other'

const component = (props: Props) => {
  const side =
    props.owner == 'me' ? styles.containerRightSide : styles.containerLeftSide
  const backgroundTint =
    props.owner == 'me'
      ? styles.ownerMeTintBackGroundColor
      : styles.ownerOtherTintBackGroundColor
  const messageTint =
    props.owner == 'me'
      ? styles.ownerMeTintMessage
      : styles.ownerOtherTintMessage

  return (
    <View style={[styles.container, side, props.style]}>
      <View style={[styles.messageContainer, side, backgroundTint]}>
        <Text style={[styles.message, messageTint]}>{props.message.body}</Text>
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
  messageContainer: styleType<ViewStyle>({
    padding: 8,
    alignSelf: 'baseline',
    borderRadius: 15,
  }),
  ownerMeTintBackGroundColor: styleType<ViewStyle>({
    backgroundColor: Colors.blue50,
  }),
  ownerOtherTintBackGroundColor: styleType<ViewStyle>({
    backgroundColor: Colors.grey100,
  }),
  message: styleType<TextStyle>({
    fontSize: 14,
  }),
  ownerMeTintMessage: styleType<TextStyle>({
    color: Colors.blue800,
  }),
  ownerOtherTintMessage: styleType<TextStyle>({
    color: Colors.grey800,
  }),
  postedAt: styleType<TextStyle>({
    fontSize: 12,
    color: Colors.grey500,
    marginTop: 8,
    marginHorizontal: 8,
  }),
})
