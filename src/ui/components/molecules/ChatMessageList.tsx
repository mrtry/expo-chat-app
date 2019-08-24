import React from 'react'
import { StyleSheet, View, FlatList, ViewStyle } from 'react-native'

import { Message } from '../../../store/entity/message'
import styleType from '../../../utils/styleType'
import ChatMessage from '../atoms/chatMessage'

interface Props {
  messages: Message[]
}

const component = (props: Props) => (
  <React.Fragment>
    <FlatList
      inverted
      data={props.messages}
      renderItem={({ item }) => (
        <ChatMessage message={item} style={styles.flatListItem} />
      )}
      keyExtractor={item => `${item.body}-${item.postedAt}`}
      ListHeaderComponent={<View style={styles.flatListHeader} />}
      style={styles.flatListContainer}
    />
  </React.Fragment>
)

export default component

const styles = StyleSheet.create({
  flatListContainer: styleType<ViewStyle>({
    paddingHorizontal: 16,
  }),
  flatListHeader: styleType<ViewStyle>({
    marginBottom: 8,
  }),
  flatListItem: styleType<ViewStyle>({
    marginBottom: 8,
  }),
})
