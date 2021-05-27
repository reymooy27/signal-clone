import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Avatar, Input } from 'react-native-elements'

const ChatScreen = ({navigation, route}) => {

  const [input, setInput] = useState('');
  const [chats, setChats] = useState([
    {
      from: 'User',
      chat: 'Message'
    },
    {
      from: 'Sender',
      chat: 'Message'
    },
    {
      from: 'User',
      chat: 'Message'
    },
    {
      from: 'Sender',
      chat: 'Message'
    },
  ])

  const sendMessage = (newChat)=>{
    Keyboard.dismiss()

    setChats([...chats, {from: 'User', chat: newChat}])

    setInput('')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: ()=>(
        <View style={{
          flexDirection: "row", 
          alignItems: 'center'}}
        >
          <Avatar 
            rounded 
            source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}
          />
          <Text 
            style={{
              color: 'white', 
              marginLeft: 10, 
              fontWeight: '700'}}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: ()=>(
        <TouchableOpacity style={{marginLeft: 10}} onPress={navigation.goBack}>
          <AntDesign name='arrowleft' size={24} color='white'/>
        </TouchableOpacity>
      ),
      headerRight: ()=>(
        <View 
          style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            width: 80, 
            marginRight: 20}}
        >
          <TouchableOpacity>
            <FontAwesome 
              name='video-camera' 
              size={24} 
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color='white'/>
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar style='light'/>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{paddingTop: 15}}>
              {chats.map((chat,i)=>(
                chat.from === 'User' ? 
                  <View key={i} style={styles.reciever}>
                    <Avatar 
                      position='absolute' 
                      containerStyle={{
                        position: 'absolute',
                        bottom: -15,
                        right: -5
                      }}
                      bottom={-15} 
                      right={-5} 
                      size={30} 
                      rounded 
                      source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}
                    />
                    <Text style={styles.recieverText}>{chat.chat}</Text>
                    <Text style={styles.recieverName}>{chat.from}</Text>
                  </View>
                  :
                  <View key={i} style={styles.sender}>
                    <Avatar 
                      position='absolute' 
                      containerStyle={{
                        position: 'absolute',
                        bottom: -15,
                        left: -5
                      }}
                      bottom={-15} 
                      left={-5} 
                      size={30} 
                      rounded 
                      source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}
                    />
                    <Text style={styles.senderText}>{chat.chat}</Text>
                    <Text style={styles.senderName}>{chat.from}</Text>
                  </View>
              ))}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput 
                placeholder='Signal Message' 
                value={input} 
                onChangeText={(text)=> setInput(text)} 
                onSubmitEditing={()=> sendMessage(input)}
                style={styles.textinput}
              />
              <TouchableOpacity 
                onPress={()=> sendMessage(input)}
                activeOpacity={0.5}
              >
                <Ionicons 
                  name='send' 
                  size={24} 
                  color='#2B68E6'
                />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  reciever:{
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative'
  },
  sender:{
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 15,
    maxWidth: '80%',
    position: 'relative'
  },
  senderName:{
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: 'white'
  },
  senderText:{
    fontWeight: '500',
    color: 'white',
    marginLeft: 10,
    marginBottom: 15
  },
  recieverText:{
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
  },
  recieverName:{
    right: 10,
    paddingLeft: 10,
    fontSize: 10,
    color: 'black'
  },
  footer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  textinput:{
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30
  }
})
