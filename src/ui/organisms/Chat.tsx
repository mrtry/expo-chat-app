import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ViewStyle } from 'react-native'
import { Appbar, Divider } from 'react-native-paper'

import TextInputForm from '../molecules/TextInputForm'
import styleType from '../../utils/styleType'
import ChatMessageList from '../molecules/ChatMessageList'
import { Message } from '../../store/entity/message'
import {
  sendMessageAsync,
  subscribeMessageRepository,
} from '../../store/repository/MessageRepository'
import { getUuidOrGenerate } from '../../store/repository/IdentifyRepository'
import { string } from 'prop-types'

const PLACEHOLDER = 'テキストメッセージ'

interface State {
  text: string
  messages: Message[]
  uuid: string
}

export default class Chat extends React.Component<any, State> {
  state: State = {
    text: '',
    messages: [],
    uuid: '',
  }

  async componentDidMount() {
    const listener = (message: Message) =>
      this.setState({ messages: [...this.state.messages, message] })
    subscribeMessageRepository(listener)

    const uuid = await getUuidOrGenerate()
    this.setState({ uuid })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="ChatApp" />
        </Appbar.Header>

        <ChatMessageList
          uuid={this.state.uuid}
          messages={[...this.state.messages].reverse()}
        />

        <Divider />

        <TextInputForm
          placeholder={PLACEHOLDER}
          currentText={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSendButtonPressed={this.onSendButtonPressed}
        />
      </KeyboardAvoidingView>
    )
  }

  onSendButtonPressed = async () => {
    const message: Message = {
      id: this.state.uuid,
      body: this.state.text,
      postedAt: new Date(),
    }
    await sendMessageAsync(message)

    this.setState({ text: '' })
  }
}

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    flex: 1,
    backgroundColor: '#fff',
  }),
})
