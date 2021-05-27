import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet,ScrollView,SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import CostumList from './CustomList'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {

  const [chats, setChats] = useState([
    {
      title: 'Chat YT',
      subtitle: 'blalaall'
    },
    {
      title: 'Chat Twitter',
      subtitle: 'blalaall'
    },
    {
      title: 'Chat Facebook',
      subtitle: 'blalaall'
    },
    {
      title: 'Chat YT',
      subtitle: 'blalaall'
    }
  ]);

  const enterChat = (id,chatName)=>{
    navigation.navigate('Chat',{
      id,
      chatName
    })
  }

  const signout = ()=>{
    navigation.replace('Login')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: 'black'},
      headerTintColor: 'black',
      headerLeft: () =>(
        <View style={{marginLeft: 20}}>
          <TouchableOpacity onPress={signout} activeOpacity={0.5}>
            <Avatar rounded source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}/>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () =>(
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          width: 80, 
          marginRight: 20
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name='camerao'size={24} color='black'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('AddChat')} activeOpacity={0.5}>
            <SimpleLineIcons name='pencil'size={24} color='black'/>
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation])

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map((data,i)=>(
          <CostumList key={i} id={i} enterChat={enterChat} title={data.title} subtitle={data.subtitle}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    height: '100%'
  }
})
