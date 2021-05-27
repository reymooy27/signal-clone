import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import {Button,Input, Image} from 'react-native-elements'

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const signin = ()=>{
    if(email === 'user' && password === 'user'){
      navigation.replace('Home')
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light'/>
      <Image source={{uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'}}
            style={{width: 150, height: 150}}
      />
      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus type='Email' value={email} onChangeText={(text)=> setEmail(text)}/>
        <Input placeholder='Password' secureTextEntry type='Password' value={password} onChangeText={(text)=> setPassword(text)}/>
        <Button onPress={signin} containerStyle={styles.button} title='Login'/>
        <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type='outline' title='Register'/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: '100%',
    margin: 10,
  }
})
