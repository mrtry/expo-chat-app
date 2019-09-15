import { AsyncStorage } from 'react-native'
import generateUuid from 'uuid/v1'

const KEY_UUID = 'KEY_UUID'

export async function getUuidOrGenerate(): Promise<string> {
  const result = await AsyncStorage.getItem(KEY_UUID)
  if (result != null) return Promise.resolve(result)

  const uuid = generateUuid()
  await AsyncStorage.setItem(KEY_UUID, uuid)

  return Promise.resolve(uuid)
}
