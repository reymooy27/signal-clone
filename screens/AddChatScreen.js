import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

const AddChatScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new chat',
      headerBackTitle: 'Chats'
    })
  }, [])

  const [input, setInput] = useState('')

  const createChat = ()=>{

  }

  return (
    <View style={styles.container}>
      <Input placeholder='Enter a chat name' 
      value={input} 
      containerStyle={styles.input}
      onSubmitEditing={createChat}
      onChangeText={(text)=> setInput(text)}/>
      <Button containerStyle={styles.button} onPress={createChat} title='Create new chat'/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 30,
    height: '100%'
  }
})
