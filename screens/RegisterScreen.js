import { StatusBar } from 'expo-status-bar'
import React, {useLayoutEffect, useState} from 'react'
import {KeyboardAvoidingView, View ,StyleSheet} from 'react-native'
import {Button, Input, Text} from 'react-native-elements'

const RegisterScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBacktTitle: 'Login'
    })
  }, [navigation])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = ()=>{

  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light'/>
      <Text h3 style={{marginBottom: 50}}>Register</Text>
      <View style={styles.inputContainer}>
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={(text)=> setName(text)}/>
        <Input placeholder='Email' type='text' value={email} onChangeText={(text)=> setEmail(text)}/>
        <Input onSubmitEditing={register} placeholder='Password' type='password' secureTextEntry value={password} onChangeText={(text)=> setPassword(text)}/>
        <Button raised containerStyle={styles.button} title='Register' onPress={register}/>
        <View style={{height: 100}}></View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  button:{
    width: '100%',
    marginTop: 10
  },
  inputContainer:{
    width: 300
  }
})
