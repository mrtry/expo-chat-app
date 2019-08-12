import * as firebase from 'firebase'
import 'firebase/firestore'

import { Message } from '../entity/message'

const REPOSITORY_NAME = 'messages'

export function subscribeMessageRepository(
  listener: (message: Message) => void
) {
  firebase
    .firestore()
    .collection(REPOSITORY_NAME)
    .orderBy('postedAt', 'asc')
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const data = change.doc.data()
          const message = {
            body: data.body,
            postedAt: data.postedAt.toDate(),
          }
          listener(message)
        }
      })
    })
}

export async function getMessagesAsync(): Promise<Message[]> {
  const docs = await firebase
    .firestore()
    .collection(REPOSITORY_NAME)
    .get()

  const messages: Message[] = []

  docs.forEach(doc => {
    const data = doc.data()
    const message = {
      body: data.body,
      postedAt: data.postedAt.toDate(),
    }
    messages.push(message)
  })

  return messages
}

export const sendMessageAsync = async (message: Message) => {
  return firebase
    .firestore()
    .collection(REPOSITORY_NAME)
    .add(message)
}
