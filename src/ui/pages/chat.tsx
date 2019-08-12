import React from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  FlatList,
  ViewStyle,
  TouchableOpacity,
} from 'react-native'
import TextInput from '../components/atoms/textInput'
import { Appbar, Divider } from 'react-native-paper'
import styleType from '../../utils/styleType'
import { MaterialIcons } from '@expo/vector-icons'
import { ColorPallet } from '../styles'
import ChatMessage from '../components/atoms/chatMessage'

const PLACEHOLDER = 'テキストメッセージ'

interface State {
  text: string
  messages: Message[]
}

export default class Chat extends React.Component<any, State> {
  state: State = {
    text: '',
    messages: [
      {
        uid: '12345',
        body: 'hoge',
        postedAt: new Date(),
      },
      {
        uid: '12343',
        body: 'hogee',
        postedAt: new Date(),
      },
      {
        uid: '12346',
        body: 'hogeeee',
        postedAt: new Date(),
      },
    ],
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="ChatApp" />
        </Appbar.Header>

        <FlatList
          inverted
          data={[...this.state.messages].reverse()}
          renderItem={({ item }) => (
            <ChatMessage message={item} style={styles.flatListItem} />
          )}
          keyExtractor={item => `${item.uid}-${item.postedAt}`}
          ListHeaderComponent={<View style={styles.flatListHeader} />}
          style={styles.flatListContainer}
        />

        <Divider />

        <View style={styles.inputTextContainer}>
          <TextInput
            placeholder={PLACEHOLDER}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={this.onSendButtonPressed}
          >
            <MaterialIcons
              name="near-me"
              size={32}
              color={ColorPallet.gray800}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

  onSendButtonPressed = () => {
    this.setState({ text: '' })
  }
}

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    flex: 1,
    backgroundColor: '#fff',
  }),
  flatListContainer: styleType<ViewStyle>({
    paddingHorizontal: 16,
  }),
  flatListHeader: styleType<ViewStyle>({
    marginBottom: 8,
  }),
  flatListItem: styleType<ViewStyle>({
    marginBottom: 8,
  }),
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
